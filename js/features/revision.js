// revision feature module
import { state } from '../core/state.js';

export function startRevisionSession() {
    // Show revision queue page with course selection
    showPage('revision-queue');
    renderRevisionQueueCourseSelection();
}

export function renderRevisionQueueCourseSelection() {
    const selectionView = document.getElementById('revision-queue-course-selection');
    const sessionView = document.getElementById('revision-queue-session');
    const coursesGrid = document.getElementById('revision-queue-courses-grid');
    
    if (!selectionView || !coursesGrid) return;
    
    // Show selection view, hide session view
    selectionView.classList.remove('hidden');
    if (sessionView) sessionView.classList.add('hidden');
    
    // Setup back button listener
    const backBtn = document.getElementById('revision-queue-back-btn');
    if (backBtn) {
        backBtn.onclick = () => showPage('courses');
    }
    
    // Render course cards
    if (state.myCourses && state.myCourses.length > 0) {
        coursesGrid.innerHTML = state.myCourses.map(course => {
            const courseData = courseDetailData[course.id];
            // Count flashcards and MCQs for this course
            const flashcards = getCourseFlashcards(course.id);
            const mcqs = getCourseMCQs(course.id);
            
            return `
                <div class="revision-queue-course-card" data-course-id="${course.id}">
                    <div class="revision-queue-course-image">
                        <img src="${course.image}" alt="${course.title}">
                    </div>
                    <div class="revision-queue-course-info">
                        <h3 class="revision-queue-course-title">${course.title}</h3>
                        <p class="revision-queue-course-instructor">${course.instructor}</p>
                        <div class="revision-queue-course-stats">
                            <div class="revision-queue-course-stat">
                                <i data-lucide="brain"></i>
                                <span>${flashcards.length} Flashcards</span>
                            </div>
                            <div class="revision-queue-course-stat">
                                <i data-lucide="zap"></i>
                                <span>${mcqs.length} MCQs</span>
                            </div>
                        </div>
                    </div>
                    <button class="revision-queue-course-select-btn">
                        Start Revision
                        <i data-lucide="chevron-right"></i>
                    </button>
                </div>
            `;
        }).join('');
        
        // Add click listeners
        coursesGrid.querySelectorAll('.revision-queue-course-card').forEach(card => {
            const courseId = parseInt(card.getAttribute('data-course-id'));
            const selectBtn = card.querySelector('.revision-queue-course-select-btn');
            
            if (selectBtn) {
                selectBtn.addEventListener('click', () => {
                    startRevisionSessionForCourse(courseId);
                });
            }
        });
    } else {
        coursesGrid.innerHTML = '<p class="revision-queue-empty">No courses available for revision.</p>';
    }
    
    lucide.createIcons();
}

export function renderRevisionQueueSession() {
    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return;
    
    // Update session title
    const titleEl = document.getElementById('revision-queue-session-title');
    const courseEl = document.getElementById('revision-queue-session-course');
    if (titleEl) {
        titleEl.textContent = state.revisionQueueMode === 'flashcards' ? 'Flashcards' : 'MCQs';
    }
    if (courseEl) {
        courseEl.textContent = courseData.title;
    }
    
    // Update mode buttons and setup listeners
    const flashcardsBtn = document.getElementById('revision-queue-mode-flashcards');
    const mcqsBtn = document.getElementById('revision-queue-mode-mcqs');
    if (flashcardsBtn) {
        flashcardsBtn.classList.toggle('active', state.revisionQueueMode === 'flashcards');
        flashcardsBtn.onclick = () => {
            state.revisionQueueMode = 'flashcards';
            renderRevisionQueueSession();
        };
    }
    if (mcqsBtn) {
        mcqsBtn.classList.toggle('active', state.revisionQueueMode === 'mcqs');
        mcqsBtn.onclick = () => {
            state.revisionQueueMode = 'mcqs';
            renderRevisionQueueSession();
        };
    }
    
    // Setup back button listener
    const sessionBackBtn = document.getElementById('revision-queue-session-back-btn');
    if (sessionBackBtn) {
        sessionBackBtn.onclick = () => renderRevisionQueueCourseSelection();
    }
    
    // Get content for current course
    const flashcards = getCourseFlashcards(state.currentCourseId);
    const mcqs = getCourseMCQs(state.currentCourseId);
    
    // Update counts
    const flashcardsCountEl = document.getElementById('revision-queue-flashcards-count');
    const mcqsCountEl = document.getElementById('revision-queue-mcqs-count');
    if (flashcardsCountEl) flashcardsCountEl.textContent = flashcards.length;
    if (mcqsCountEl) mcqsCountEl.textContent = mcqs.length;
    
    // Render content
    const contentEl = document.getElementById('revision-queue-content');
    if (!contentEl) return;
    
    if (state.revisionQueueMode === 'flashcards') {
        renderRevisionQueueFlashcards(contentEl, flashcards);
    } else {
        renderRevisionQueueMCQs(contentEl, mcqs);
    }
    
    lucide.createIcons();
}
