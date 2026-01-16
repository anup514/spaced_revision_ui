// testSeries feature module
import { state } from '../core/state.js';

export function initializeTestInterface() {
    if (!state.testState) return;

    const testState = state.testState;

    // Update total questions display
    document.getElementById('test-total-questions').textContent = testState.totalQuestions;
    document.getElementById('test-total-questions-progress').textContent = testState.totalQuestions;

    // Render question palette
    renderQuestionPalette();

    // Render current question
    renderCurrentQuestion();

    // Start timer
    startTimer();

    // Setup event listeners
    setupTestEventListeners();

    // Update status displays
    updateTestStatus();
}

export function renderQuestionPalette() {
    const container = document.getElementById('test-palette-grid');
    if (!container || !state.testState) return;

    const testState = state.testState;
    container.innerHTML = '';

    for (let i = 0; i < testState.totalQuestions; i++) {
        const item = document.createElement('div');
        
        // Determine status class
        let statusClass = 'not-visited';
        if (testState.markedForReview[i]) {
            statusClass = 'marked';
        } else if (testState.answers[i] !== null) {
            statusClass = 'answered';
        }

        item.className = `test-palette-item ${statusClass}`;
        if (i === testState.currentQuestionIndex) {
            item.classList.add('active');
        }
        item.textContent = i + 1;
        item.setAttribute('data-question-index', i);
        item.addEventListener('click', () => navigateToQuestion(i));
        container.appendChild(item);
    }
}

export function renderCurrentQuestion() {
    if (!state.testState) return;

    const testState = state.testState;
    const question = testState.questions[testState.currentQuestionIndex];

    // Update question number
    document.getElementById('test-current-question-num').textContent = testState.currentQuestionIndex + 1;

    // Update question text
    document.getElementById('test-question-text').textContent = question.text;

    // Render options
    const optionsContainer = document.getElementById('test-options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'test-option';
        if (testState.answers[testState.currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'test-option';
        radio.value = index;
        radio.id = `test-option-${index}`;
        radio.checked = testState.answers[testState.currentQuestionIndex] === index;
        radio.addEventListener('change', () => selectAnswer(index));

        const label = document.createElement('label');
        label.className = 'test-option-label';
        label.htmlFor = `test-option-${index}`;
        label.textContent = option;

        // Make the entire container clickable
        optionDiv.addEventListener('click', (e) => {
            // Don't trigger if clicking directly on the radio or label (to avoid double-trigger)
            if (e.target !== radio && e.target !== label) {
                radio.checked = true;
                selectAnswer(index);
            }
        });

        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });

    // Update palette active state
    renderQuestionPalette();
}

export function startTimer() {
    if (!state.testState) return;

    if (state.testState.timerInterval) {
        clearInterval(state.testState.timerInterval);
    }

    // Display initial time
    updateTimerDisplay();

    state.testState.timerInterval = setInterval(() => {
        if (!state.testState) return;

        state.testState.timerSeconds--;

        if (state.testState.timerSeconds <= 0) {
            clearInterval(state.testState.timerInterval);
            state.testState.timerSeconds = 0;
            updateTimerDisplay();
            // Handle timer expiration
            alert('Time is up! The test will be submitted automatically.');
            submitTest();
            return;
        }

        updateTimerDisplay();
    }, 1000);
}
