// courseDetail feature module
import { state } from '../core/state.js';

export function renderCourseDetail(courseId) {
    const courseData = courseDetailData[courseId];
    if (!courseData) {
        console.error('Course data not found for ID:', courseId);
        return;
    }

    // Update navigation
    const titleEl = document.getElementById('course-detail-title');
    const subtitleEl = document.getElementById('course-detail-subtitle');
    if (titleEl) titleEl.textContent = courseData.title;
    
    // Calculate total course counts
    const totalFlashcards = getCourseFlashcards(courseId).length;
    const totalMCQs = getCourseMCQs(courseId).length;
    
    // Build subtitle with mastery and validity badge (counts moved to sidebar)
    if (subtitleEl) {
        let subtitleHTML = `Aggregate Mastery: ${courseData.totalMastery}%`;
        if (courseData.expiryDate) {
            const validityText = formatCourseValidity(courseData.expiryDate);
            if (validityText) {
                let badgeContent = validityText;
                let badgeClasses = 'course-detail-validity-badge';
                
                // Include EMI due info in the validity badge if available
                if (courseData.nextEMIDueDate) {
                    const emiText = formatEMIDueDate(courseData.nextEMIDueDate);
                    badgeContent += ` • ${emiText}`;
                }
                
                // Check if badge content contains "overdue" or "remaining" (case insensitive)
                const badgeContentLower = badgeContent.toLowerCase();
                if (badgeContentLower.includes('overdue') || badgeContentLower.includes('remaining')) {
                    badgeClasses += ' badge-overdue badge-remaining';
                }
                
                subtitleHTML += ` <span class="${badgeClasses}" id="course-validity-badge">${badgeContent}</span>`;
            }
        }
        
        subtitleEl.innerHTML = subtitleHTML;
        
        // Add click event listener to validity badge
        const validityBadge = document.getElementById('course-validity-badge');
        if (validityBadge && courseData.purchaseDate && courseData.expiryDate) {
            validityBadge.addEventListener('click', () => {
                openCourseValidityModal(courseData.purchaseDate, courseData.expiryDate, courseData.nextEMIDueDate, courseData.emiDetails);
            });
        }
    }

    // Render sidebar lessons
    renderCourseDetailLessons(courseData);
    
    // Update total counts below "Lesson Modules" heading
    updateLessonModulesCounts(courseId);

    // Render current view
    switchCourseView(state.currentCourseView);

    // Setup event listeners
    setupCourseDetailEventListeners();

    // Update theme icon
    updateThemeIcon();

    // Update icons
    lucide.createIcons();
}

export function renderCourseDetailLessons(courseData) {
    const container = document.getElementById('course-detail-lessons-list');
    if (!container) return;

    // Initialize collapsed state if not exists
    if (!state.collapsedSections) {
        state.collapsedSections = new Set();
    }

    let html = '';
    courseData.sections.forEach((section, index) => {
        const sectionId = `section-${index}`;
        const isCollapsed = state.collapsedSections.has(sectionId);
        
        // Calculate counts for this section
        const sectionFlashcards = getSectionFlashcards(state.currentCourseId, section.id).length;
        const sectionMCQs = getSectionMCQs(state.currentCourseId, section.id).length;
        
        html += `<div class="course-detail-section-group">
            <div class="course-detail-section-header-wrapper">
                <button class="course-detail-section-header" data-section-id="${sectionId}">
                    <span class="course-detail-section-title">${section.title}</span>
                    <i data-lucide="chevron-down" class="course-detail-section-chevron ${isCollapsed ? 'collapsed' : ''}"></i>
                </button>
                <div class="course-detail-section-counts">
                    <span class="course-detail-section-count-badge" title="${sectionFlashcards} Flashcards">
                        <i data-lucide="brain" class="course-detail-section-count-icon"></i>
                        <span class="course-detail-section-count-number">${sectionFlashcards}</span>
                    </span>
                    <span class="course-detail-section-count-badge" title="${sectionMCQs} MCQs">
                        <i data-lucide="zap" class="course-detail-section-count-icon"></i>
                        <span class="course-detail-section-count-number">${sectionMCQs}</span>
                    </span>
                </div>
            </div>
            <div class="course-detail-lessons-group ${isCollapsed ? 'hidden' : ''}">`;
        
        section.lessons.forEach(lesson => {
            const isActive = state.currentCourseView === 'lesson' && state.currentLessonId === lesson.id;
            const lessonId = lesson.id;
            
            // Check if user has done content for this lesson
            const hasDoneContent = hasUserDoneContentForLesson(state.currentCourseId, lessonId);
            
            // Get due counts if user has done content
            let dueFlashcardsCount = 0;
            let dueMCQsCount = 0;
            if (hasDoneContent) {
                const dueFlashcards = getDueFlashcardsForLesson(state.currentCourseId, lessonId);
                const dueMCQs = getDueMCQsForLesson(state.currentCourseId, lessonId);
                dueFlashcardsCount = dueFlashcards.length;
                dueMCQsCount = dueMCQs.length;
            }
            
            const hasDueItems = dueFlashcardsCount > 0 || dueMCQsCount > 0;
            const lessonWrapperId = `lesson-wrapper-${lessonId}`;
            
            html += `<div class="course-detail-lesson-wrapper" id="${lessonWrapperId}" data-lesson-id="${lessonId}">
                <button class="course-detail-lesson-item ${isActive ? 'active' : ''}" data-lesson-id="${lessonId}">
                    <div class="course-detail-lesson-progress">
                        <svg class="course-detail-lesson-progress-svg" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="transparent" class="course-detail-lesson-progress-bg" />
                            <circle cx="8" cy="8" r="6" stroke="${getLessonStatusColor(lesson.status)}" stroke-width="2" fill="transparent" 
                                stroke-dasharray="${2 * Math.PI * 6}" 
                                stroke-dashoffset="${2 * Math.PI * 6 * (1 - lesson.mastery / 100)}" 
                                stroke-linecap="round" />
                        </svg>
                    </div>
                    <span class="course-detail-lesson-title">${lesson.title}</span>
                </button>`;
            
            // Add due section if user has done content - always show when there are due items
            if (hasDoneContent && hasDueItems) {
                html += `<div class="course-detail-lesson-due-section">
                    <div class="course-detail-lesson-due-counts">
                        ${dueFlashcardsCount > 0 ? `
                            <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-flashcards" data-lesson-id="${lessonId}" data-type="flashcards">
                                <i data-lucide="brain" class="course-detail-lesson-due-icon"></i>
                                <span class="course-detail-lesson-due-number">${dueFlashcardsCount}</span>
                                <span class="course-detail-lesson-due-label">Due</span>
                            </span>
                        ` : ''}
                        ${dueMCQsCount > 0 ? `
                            <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-mcqs" data-lesson-id="${lessonId}" data-type="mcqs">
                                <i data-lucide="zap" class="course-detail-lesson-due-icon"></i>
                                <span class="course-detail-lesson-due-number">${dueMCQsCount}</span>
                                <span class="course-detail-lesson-due-label">Due</span>
                            </span>
                        ` : ''}
                    </div>
                </div>`;
            } else if (hasDoneContent && !hasDueItems) {
                // Show "all caught up" when user has done content but no due items
                html += `<div class="course-detail-lesson-due-section">
                    <div class="course-detail-lesson-due-counts">
                        <span class="course-detail-lesson-due-badge course-detail-lesson-due-badge-none">
                            <i data-lucide="check-circle" class="course-detail-lesson-due-icon"></i>
                            <span class="course-detail-lesson-due-label">All caught up!</span>
                        </span>
                    </div>
                </div>`;
            }
            
            html += `</div>`;
        });
        
        html += `</div></div>`;
    });

    container.innerHTML = html;

    // Add click handlers for section headers (collapse/expand)
    container.querySelectorAll('.course-detail-section-header').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.getAttribute('data-section-id');
            const headerWrapper = header.closest('.course-detail-section-header-wrapper');
            const lessonsGroup = headerWrapper ? headerWrapper.nextElementSibling : header.nextElementSibling;
            const chevron = header.querySelector('.course-detail-section-chevron');
            
            if (state.collapsedSections.has(sectionId)) {
                state.collapsedSections.delete(sectionId);
                lessonsGroup.classList.remove('hidden');
                chevron.classList.remove('collapsed');
            } else {
                state.collapsedSections.add(sectionId);
                lessonsGroup.classList.add('hidden');
                chevron.classList.add('collapsed');
            }
            
            lucide.createIcons();
        });
    });

    // Add click handlers for lesson items
    container.querySelectorAll('.course-detail-lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const lessonId = parseInt(item.getAttribute('data-lesson-id'));
            state.currentLessonId = lessonId;
            
            // Update active state on all lesson items
            container.querySelectorAll('.course-detail-lesson-item').forEach(li => {
                li.classList.remove('active');
            });
            item.classList.add('active');
            
            switchCourseView('lesson');
        });
    });
    
    // Add click handlers for due badges to navigate to lesson
    container.querySelectorAll('.course-detail-lesson-due-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the lesson item click
            const lessonId = parseInt(badge.getAttribute('data-lesson-id'));
            const type = badge.getAttribute('data-type');
            
            if (lessonId) {
                state.currentLessonId = lessonId;
                
                // Update active state
                container.querySelectorAll('.course-detail-lesson-item').forEach(li => {
                    li.classList.remove('active');
                });
                const lessonItem = container.querySelector(`.course-detail-lesson-item[data-lesson-id="${lessonId}"]`);
                if (lessonItem) lessonItem.classList.add('active');
                
                // Determine which tab to show based on badge type
                if (type === 'flashcards') {
                    state.currentLessonTab = 'flashcards';
                } else if (type === 'mcqs') {
                    state.currentLessonTab = 'quiz';
                }
                
                switchCourseView('lesson');
            }
        });
    });

    lucide.createIcons();
}

export function switchCourseView(mode) {
    state.currentCourseView = mode;

    // Hide all views
    document.querySelectorAll('.course-detail-view').forEach(view => {
        view.classList.add('hidden');
    });

    // Update hub buttons
    document.querySelectorAll('.course-detail-hub-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-view') === mode) {
            btn.classList.add('active');
        }
    });

    // Update lesson items active state
    const container = document.getElementById('course-detail-lessons-list');
    if (container) {
        container.querySelectorAll('.course-detail-lesson-item').forEach(item => {
            item.classList.remove('active');
            // Only add active class if we're switching to lesson view and this is the current lesson
            if (mode === 'lesson') {
                const lessonId = parseInt(item.getAttribute('data-lesson-id'));
                if (lessonId === state.currentLessonId) {
                    item.classList.add('active');
                }
            }
        });
    }

    // Show selected view
    const viewEl = document.getElementById(`course-detail-view-${mode}`);
    if (viewEl) {
        viewEl.classList.remove('hidden');
    }

    // Render view content
    switch (mode) {
        case 'lesson':
            renderLessonView();
            break;
        case 'global-recall':
            renderSmartRevisionView();
            break;
        case 'writing':
            renderWritingView();
            break;
        case 'analytics':
            renderAnalyticsView();
            break;
        case 'test-series':
            renderTestSeriesView();
            break;
    }

    lucide.createIcons();
}

export function renderLessonView() {
    const courseData = courseDetailData[state.currentCourseId];
    if (!courseData) return;

    // Find current lesson
    let currentLesson = null;
    for (const section of courseData.sections) {
        currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
        if (currentLesson) break;
    }

    if (!currentLesson) {
        // Default to first lesson
        const firstSection = courseData.sections[0];
        if (firstSection && firstSection.lessons.length > 0) {
            currentLesson = firstSection.lessons[0];
            state.currentLessonId = currentLesson.id;
        }
    }

    if (!currentLesson) return;

    // Update tab counts (include user content)
    const flashcardsCountEl = document.getElementById('lesson-flashcards-count');
    const mcqsCountEl = document.getElementById('lesson-mcqs-count');
    
    // Count educator flashcards
    const educatorFlashcards = repository.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                return f.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count user flashcards
    const userFlashcards = state.userContent.flashcards.filter(f => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                return f.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count educator MCQs
    const educatorMcqs = repository.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                return m.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    // Count user MCQs
    const userMcqs = state.userContent.mcqs.filter(m => {
        for (const section of courseData.sections) {
            if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                return m.tid === currentLesson.id;
            }
        }
        return false;
    });
    
    if (flashcardsCountEl) flashcardsCountEl.textContent = educatorFlashcards.length + userFlashcards.length;
    if (mcqsCountEl) mcqsCountEl.textContent = educatorMcqs.length + userMcqs.length;

    // Update video badge with lesson title
    const videoBadgeText = document.getElementById('video-title-badge-text');
    if (videoBadgeText) {
        videoBadgeText.textContent = currentLesson.title;
    }

    // Update video title and description below video
    const videoTitleEl = document.getElementById('course-detail-video-title');
    const videoDescriptionEl = document.getElementById('course-detail-video-description');
    if (videoTitleEl) {
        videoTitleEl.textContent = currentLesson.title;
    }
    if (videoDescriptionEl) {
        videoDescriptionEl.textContent = 'High-relevance UPSC concept. Study carefully.';
    }

    // Initialize video player
    setTimeout(() => {
        initVideoPlayer();
    }, 100);

    // Set default tab to flashcards if current tab is video
    if (state.currentLessonTab === 'video') {
        state.currentLessonTab = 'flashcards';
    }

    // Render tab content
    renderLessonTabContent(currentLesson);

    // Scroll main content area to top to show video
    setTimeout(() => {
        const mainContent = document.querySelector('.course-detail-main');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 150);
}
