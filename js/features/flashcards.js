// flashcards feature module
import { state } from '../core/state.js';
import { getVideoSourceHTML } from './courseDetail.js';
import { openReportModal } from '../ui/modals.js';

export function renderSingleFlashcard(container, card, currentNumber, totalCards) {
    const isRevealed = state.revealStates[card.id] || false;
    
    container.innerHTML = `
        <div class="revision-single-card-container">
            <div class="revision-progress-indicator">
                Card ${currentNumber} of ${totalCards}
            </div>
            <div class="revision-single-card-wrapper">
                <div class="course-detail-flashcard-wrapper revision-flashcard-square">
                    <div class="course-detail-flashcard-card ${isRevealed ? 'flipped' : ''} ${card.source === 'user' ? 'user-created' : ''}">
                        <div class="course-detail-flashcard-inner">
                            <div class="course-detail-flashcard-front">
                                ${card.source === 'user' ? '<div class="user-created-badge">Your Content</div>' : ''}
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.q}
                                </div>
                                <div class="course-detail-flashcard-actions">
                                    <button class="course-detail-reveal-btn" data-card-id="${card.id}">Reveal Answer</button>
                                    ${card.source !== 'user' ? `
                                    <button class="course-detail-flashcard-report-btn" data-card-id="${card.id}">
                                        <i data-lucide="flag"></i>
                                        <span>Report</span>
                                    </button>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="course-detail-flashcard-back">
                                ${getVideoSourceHTML(card)}
                                <div class="course-detail-flashcard-id">Card ID: #${card.id}</div>
                                <div class="course-detail-flashcard-content">
                                    ${card.a}
                                </div>
                                <div class="course-detail-difficulty-buttons">
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-card-id="${card.id}" data-difficulty="again">Again</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-card-id="${card.id}" data-difficulty="hard">Hard</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-card-id="${card.id}" data-difficulty="good">Good</button>
                                    <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-card-id="${card.id}" data-difficulty="easy">Easy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    const revealBtn = container.querySelector('.course-detail-reveal-btn');
    if (revealBtn) {
        revealBtn.addEventListener('click', () => {
            const cardId = parseInt(revealBtn.getAttribute('data-card-id'));
            const cardElement = container.querySelector('.course-detail-flashcard-card');
            if (cardElement) {
                cardElement.classList.add('flipped');
            }
            state.revealStates[cardId] = true;
        });
    }
    
    // Difficulty button handlers
    container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = parseInt(btn.getAttribute('data-card-id'));
            const difficulty = btn.getAttribute('data-difficulty');
            
            // Handle difficulty rating
            handleCardDifficulty(card, difficulty, 'flashcard');
            
            // Remove reveal state
            delete state.revealStates[cardId];
            
            // Move to next card
            state.revisionSession.currentIndex++;
            state.revisionSession.completedCount++;
            
            // Render next card or completion screen
            renderRevisionSession();
        });
    });
    
    // Report button
    const reportBtn = container.querySelector('.course-detail-flashcard-report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            const cardId = parseInt(reportBtn.getAttribute('data-card-id'));
            openReportModal(cardId, 'flashcard');
        });
    }
}

export function calculateNextReview(card, quality) {
    // Initialize if needed
    initializeCardSpacedRepetition(card);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (quality < 3) {
        // Again or Hard - reset
        card.interval = 1;
        card.repetitions = 0;
        if (quality === 0) {
            // Again - reduce ease factor
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
        } else {
            // Hard - slight reduction
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.15);
        }
    } else {
        // Good or Easy
        if (card.repetitions === 0) {
            card.interval = 1;
        } else if (card.repetitions === 1) {
            card.interval = 6;
        } else {
            card.interval = Math.round(card.interval * card.easeFactor);
        }
        
        card.repetitions += 1;
        
        if (quality === 3) {
            // Easy - increase ease factor
            card.easeFactor += 0.15;
        }
    }
    
    // Update last review date
    card.lastReviewDate = today.toISOString().split('T')[0];
    
    // Calculate next due date
    const nextDueDate = new Date(today);
    nextDueDate.setDate(nextDueDate.getDate() + card.interval);
    card.dueDate = nextDueDate.toISOString().split('T')[0];
    
    return card;
}

export function initializeCardSpacedRepetition(card) {
    if (!card.easeFactor) card.easeFactor = 2.5; // SM-2 default
    if (card.interval === undefined) card.interval = 0; // New card
    if (card.repetitions === undefined) card.repetitions = 0;
    if (!card.lastReviewDate) {
        // If card has dueDate, it's been reviewed before
        if (card.dueDate) {
            card.lastReviewDate = new Date(card.dueDate).toISOString().split('T')[0];
        } else {
            // New card - set due for today
            card.dueDate = new Date().toISOString().split('T')[0];
            card.lastReviewDate = null;
        }
    }
    return card;
}

export function getDueCards(cards) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return cards.filter(card => {
        // Initialize if needed
        initializeCardSpacedRepetition(card);
        
        // If no dueDate, it's a new card - due immediately
        if (!card.dueDate) {
            card.dueDate = today.toISOString().split('T')[0];
            return true;
        }
        
        // Check if due date is today or in the past
        const dueDate = new Date(card.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        return dueDate <= today;
    });
}
