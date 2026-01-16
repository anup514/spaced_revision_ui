// writing feature module
import { state } from '../core/state.js';

export function openWritingSession(question) {
    const modal = document.getElementById('writing-session-modal');
    const questionElement = document.getElementById('writing-session-question');
    const badgesContainer = document.getElementById('writing-session-badges');
    const input = document.getElementById('writing-session-input');
    const wordCount = document.getElementById('writing-session-word-count');
    const timerElement = document.getElementById('writing-session-timer');
    
    if (!modal || !questionElement || !badgesContainer || !input) return;
    
    // Clear any existing timer first
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
        writingSessionState.timerInterval = null;
    }
    
    // Remove timer warning classes
    if (timerElement) {
        timerElement.classList.remove('timer-warning', 'timer-expired');
    }
    
    // Store question
    writingSessionState.question = question;
    
    // Set question content
    questionElement.textContent = `"${question.q}"`;
    
    // Set badges
    badgesContainer.innerHTML = `
        <span class="writing-session-badge writing-session-badge-gs">${question.gs}</span>
        <span class="writing-session-badge writing-session-badge-sub">${question.sub}</span>
        <span class="writing-session-badge writing-session-badge-time">${question.t} Mins</span>
    `;
    
    // Reset input
    input.value = '';
    input.disabled = false;
    input.placeholder = 'Start writing your answer here...';
    wordCount.textContent = '0 words';
    
    // Reset and start timer (convert minutes to seconds)
    const timeInSeconds = question.t * 60;
    writingSessionState.timeRemaining = timeInSeconds;
    startWritingTimer();
    
    // Show modal first
    modal.classList.remove('hidden');
    
    // Reset textarea height after modal is shown (to calculate available space)
    setTimeout(() => {
        input.style.height = 'auto';
        autoResizeTextarea(input);
        input.focus();
    }, 100);
    
    // Initialize icons
    lucide.createIcons();
}

export function startWritingTimer() {
    const timerElement = document.getElementById('writing-session-timer');
    if (!timerElement) return;
    
    // Clear any existing timer
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
    }
    
    // Update timer display immediately
    updateTimerDisplay();
    
    // Update timer every second
    writingSessionState.timerInterval = setInterval(() => {
        if (writingSessionState.timeRemaining > 0) {
            writingSessionState.timeRemaining--;
            updateTimerDisplay();
        } else {
            // Time's up
            clearInterval(writingSessionState.timerInterval);
            timerElement.textContent = '00:00';
            timerElement.classList.add('timer-expired');
            // Optionally show an alert or disable input
            const input = document.getElementById('writing-session-input');
            if (input) {
                input.disabled = true;
                input.placeholder = 'Time is up!';
            }
        }
    }, 1000);
}

export function closeWritingSession() {
    const modal = document.getElementById('writing-session-modal');
    if (!modal) return;
    
    // Clear timer
    if (writingSessionState.timerInterval) {
        clearInterval(writingSessionState.timerInterval);
        writingSessionState.timerInterval = null;
    }
    
    // Reset state
    writingSessionState.timeRemaining = 0;
    writingSessionState.question = null;
    
    // Hide modal
    modal.classList.add('hidden');
    
    // Remove timer warning classes
    const timerElement = document.getElementById('writing-session-timer');
    if (timerElement) {
        timerElement.classList.remove('timer-warning', 'timer-expired');
    }
    
    // Re-enable input if it was disabled
    const input = document.getElementById('writing-session-input');
    if (input) {
        input.disabled = false;
        input.placeholder = 'Start writing your answer here...';
    }
}

export function initWritingSession() {
    const closeBtn = document.getElementById('writing-session-close');
    const cancelBtn = document.getElementById('writing-session-cancel');
    const submitBtn = document.getElementById('writing-session-submit');
    const modal = document.getElementById('writing-session-modal');
    const input = document.getElementById('writing-session-input');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeWritingSession);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to cancel? Your progress will be lost.')) {
                closeWritingSession();
            }
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const input = document.getElementById('writing-session-input');
            if (input && input.value.trim()) {
                // Here you can add logic to save the answer
                alert('Answer submitted! (This is a placeholder - implement save functionality)');
                closeWritingSession();
            } else {
                alert('Please write an answer before submitting.');
            }
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (confirm('Are you sure you want to close? Your progress will be lost.')) {
                    closeWritingSession();
                }
            }
        });
    }
    
    // Update word count on input and auto-resize
    if (input) {
        input.addEventListener('input', () => {
            updateWordCount();
            autoResizeTextarea(input);
        });
    }
}
