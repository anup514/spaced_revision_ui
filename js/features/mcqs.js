// mcqs feature module
import { state } from '../core/state.js';

export function renderSingleMCQ(container, mcq, currentNumber, totalCards) {
    const selectedAnswer = state.quizAnswers[mcq.id];
    const isAnswered = selectedAnswer !== undefined;
    
    container.innerHTML = `
        <div class="revision-single-card-container">
            <div class="revision-progress-indicator">
                Question ${currentNumber} of ${totalCards}
            </div>
            <div class="revision-single-card-wrapper">
                <div class="course-detail-mcq-card ${mcq.source === 'user' ? 'user-created' : ''} revision-mcq-square">
                    <div class="course-detail-mcq-header">
                        <div class="course-detail-mcq-header-left">
                            <span class="course-detail-mcq-difficulty-badge">Difficulty: ${getMCQDifficulty(mcq)}</span>
                        </div>
                        ${mcq.source !== 'user' ? `
                        <div class="course-detail-mcq-header-right">
                            <button class="course-detail-mcq-report-btn" data-mcq-id="${mcq.id}">
                                <i data-lucide="flag"></i>
                                <span>Report</span>
                            </button>
                        </div>
                        ` : ''}
                    </div>
                    ${getVideoSourceHTML(mcq)}
                    <div class="course-detail-mcq-id">Question ID: #${mcq.id}</div>
                    <div class="course-detail-mcq-question">${mcq.question}</div>
                    <div class="course-detail-mcq-options">
                        ${mcq.options.map((opt, i) => {
                            const optionId = `mcq-${mcq.id}-opt-${i}`;
                            const isSelected = selectedAnswer === i;
                            const isCorrect = opt.correct;
                            const showResult = isAnswered && isSelected;
                            
                            return `
                                <div class="course-detail-mcq-option-container ${showResult ? 'expanded' : ''}">
                                    <button class="course-detail-mcq-option ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}" 
                                            data-mcq-id="${mcq.id}" 
                                            data-option-index="${i}"
                                            ${isAnswered ? 'disabled' : ''}>
                                        <div class="course-detail-mcq-option-radio">
                                            <div class="course-detail-mcq-option-radio-fill ${isSelected ? 'selected' : ''}"></div>
                                        </div>
                                        <span>${opt.text}</span>
                                    </button>
                                    ${showResult ? `
                                        <div class="course-detail-mcq-explanation">${opt.exp}</div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                    ${isAnswered ? `
                        <div class="course-detail-difficulty-buttons">
                            <button class="course-detail-difficulty-btn course-detail-difficulty-again" data-mcq-id="${mcq.id}" data-difficulty="again">Again</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-hard" data-mcq-id="${mcq.id}" data-difficulty="hard">Hard</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-good" data-mcq-id="${mcq.id}" data-difficulty="good">Good</button>
                            <button class="course-detail-difficulty-btn course-detail-difficulty-easy" data-mcq-id="${mcq.id}" data-difficulty="easy">Easy</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for options
    if (!isAnswered) {
        container.querySelectorAll('.course-detail-mcq-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                const optionIndex = parseInt(btn.getAttribute('data-option-index'));
                
                state.quizAnswers[mcqId] = optionIndex;
                
                // Re-render to show result
                renderSingleMCQ(container, mcq, currentNumber, totalCards);
            });
        });
    }
    
    // Difficulty button handlers
    if (isAnswered) {
        container.querySelectorAll('.course-detail-difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mcqId = parseInt(btn.getAttribute('data-mcq-id'));
                const difficulty = btn.getAttribute('data-difficulty');
                
                // Handle difficulty rating
                handleCardDifficulty(mcq, difficulty, 'mcq');
                
                // Remove answer state
                delete state.quizAnswers[mcqId];
                
                // Move to next card
                state.revisionSession.currentIndex++;
                state.revisionSession.completedCount++;
                
                // Render next card or completion screen
                renderRevisionSession();
            });
        });
    }
    
    // Report button
    const reportBtn = container.querySelector('.course-detail-mcq-report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            const mcqId = parseInt(reportBtn.getAttribute('data-mcq-id'));
            openReportModal(mcqId, 'mcq');
        });
    }
}

export function formatMCQDueDate(mcq) {
    if (mcq.dueDate) {
        const now = new Date();
        const due = new Date(mcq.dueDate);
        const diffTime = due - now;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (diffDays < 0) {
            return 'Overdue';
        } else if (diffDays < 30) {
            const days = Math.round(diffDays);
            return `Due in ${days} ${days === 1 ? 'day' : 'days'}`;
        } else if (diffDays < 365) {
            const months = (diffDays / 30).toFixed(1);
            return `Due in ${months} months`;
        } else {
            const years = (diffDays / 365).toFixed(1);
            return `Due in ${years} ${years === '1.0' ? 'year' : 'years'}`;
        }
    }
    // Default: 2.6 months from now
    const defaultDue = new Date();
    defaultDue.setMonth(defaultDue.getMonth() + 2.6);
    return 'Due in 2.6 months';
}

export function getMCQDifficulty(mcq) {
    return mcq.difficulty || 'Basic';
}
