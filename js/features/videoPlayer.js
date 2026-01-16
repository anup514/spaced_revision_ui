// videoPlayer feature module
import { state } from '../core/state.js';

export function initVideoPlayer() {
    const video = document.getElementById('course-video-player');
    const container = document.getElementById('video-player-container');
    if (!video || !container) {
        // Video player not in current view, skip initialization
        return;
    }
    
    // Reset video if needed
    video.load();

    const playPauseBtn = document.getElementById('video-play-pause');
    const playPauseIcon = document.getElementById('play-pause-icon');
    const addBtn = document.getElementById('video-add-btn');
    const addMenu = document.getElementById('video-add-menu');
    const modal = document.getElementById('video-content-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCancel = document.getElementById('modal-cancel');
    const modalSave = document.getElementById('modal-save');
    const progressFill = document.getElementById('video-progress-fill');
    const seekInput = document.getElementById('video-seek');
    const timeDisplay = document.getElementById('video-time');
    const markersContainer = document.getElementById('video-markers');
    const muteBtn = document.getElementById('video-mute-btn');
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('video-volume');
    const volumeGroup = document.querySelector('.video-volume-group');
    const speedBtn = document.getElementById('video-speed-btn');
    const speedText = document.getElementById('video-speed-text');
    const skipBackBtn = document.getElementById('video-skip-back');
    const skipForwardBtn = document.getElementById('video-skip-forward');
    const fullscreenBtn = document.getElementById('video-fullscreen-btn');
    const fullscreenIcon = document.getElementById('fullscreen-icon');
    const controlsOverlay = document.getElementById('video-player-controls');

    // Update video state
    function updateVideoState() {
        videoPlayerState.currentTime = video.currentTime;
        videoPlayerState.duration = video.duration || 0;
        videoPlayerState.isPlaying = !video.paused;

        // Update progress bar
        if (videoPlayerState.duration > 0) {
            const percent = (videoPlayerState.currentTime / videoPlayerState.duration) * 100;
            if (progressFill) progressFill.style.width = percent + '%';
            if (seekInput) seekInput.value = percent;
        }

        // Update time display
        if (timeDisplay) {
            timeDisplay.textContent = formatVideoTime(videoPlayerState.currentTime) + ' / ' + formatVideoTime(videoPlayerState.duration);
        }

        // Update play/pause icon
        if (playPauseIcon) {
            const iconName = videoPlayerState.isPlaying ? 'pause' : 'play';
            playPauseIcon.setAttribute('data-lucide', iconName);
            // Force icon update with slight delay to ensure DOM is ready
            setTimeout(() => {
                lucide.createIcons();
            }, 0);
        }

        // Update volume icon
        if (volumeIcon) {
            if (videoPlayerState.isMuted || videoPlayerState.volume === 0) {
                volumeIcon.setAttribute('data-lucide', 'volume-x');
            } else if (videoPlayerState.volume < 0.5) {
                volumeIcon.setAttribute('data-lucide', 'volume-1');
            } else {
                volumeIcon.setAttribute('data-lucide', 'volume-2');
            }
            lucide.createIcons();
        }

        // Update markers
        updateVideoMarkers();
    }
    
    function showControls() {
        if (controlsOverlay) {
            controlsOverlay.style.opacity = '1';
            videoPlayerState.showControls = true;
        }
        clearControlsTimeout();
        if (videoPlayerState.isPlaying && !videoPlayerState.addMenuOpen && !videoPlayerState.modalOpen) {
            videoPlayerState.controlsTimeout = setTimeout(() => {
                if (videoPlayerState.isPlaying) {
                    if (controlsOverlay) controlsOverlay.style.opacity = '0';
                    videoPlayerState.showControls = false;
                }
            }, 3000);
        }
    }
    
    function clearControlsTimeout() {
        if (videoPlayerState.controlsTimeout) {
            clearTimeout(videoPlayerState.controlsTimeout);
            videoPlayerState.controlsTimeout = null;
        }
    }

    function formatVideoTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function updateVideoMarkers() {
        if (!markersContainer || !videoPlayerState.duration) return;
        
        // Get current lesson
        const courseData = courseDetailData[state.currentCourseId];
        if (!courseData) return;
        
        let currentLesson = null;
        for (const section of courseData.sections) {
            currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
            if (currentLesson) break;
        }
        if (!currentLesson) return;

        // Get all user content for this lesson
        const allContent = [
            ...state.userContent.flashcards.filter(f => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === f.sid)) {
                        return f.tid === currentLesson.id;
                    }
                }
                return false;
            }),
            ...state.userContent.mcqs.filter(m => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === m.sid)) {
                        return m.tid === currentLesson.id;
                    }
                }
                return false;
            }),
            ...state.userContent.notes.filter(n => {
                for (const section of courseData.sections) {
                    if (section.lessons.some(l => l.id === currentLesson.id && section.id === n.sid)) {
                        return n.tid === currentLesson.id;
                    }
                }
                return false;
            })
        ];

        markersContainer.innerHTML = allContent.map(item => {
            const percent = (item.time / videoPlayerState.duration) * 100;
            const type = item.type || (item.q ? 'flashcard' : item.question ? 'mcq' : 'note');
            const color = type === 'flashcard' ? '#f59e0b' : type === 'mcq' ? '#6366f1' : '#3b82f6';
            return `<div class="video-marker" style="left: ${percent}%;" data-time="${item.time}" title="${type}">
                <div class="video-marker-dot" style="background-color: ${color}; border-color: ${color};"></div>
                <div class="video-marker-triangle" style="border-top-color: ${color};"></div>
            </div>`;
        }).join('');
        
        // Add click handlers to markers
        markersContainer.querySelectorAll('.video-marker').forEach(marker => {
            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                const time = parseFloat(marker.getAttribute('data-time'));
                video.currentTime = time;
            });
        });
    }

    // Play/Pause toggle
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasPlaying = videoPlayerState.isPlaying;
            if (wasPlaying) {
                video.pause();
            } else {
                video.play();
            }
            // Update icon immediately (before video events fire)
            if (playPauseIcon) {
                // Show pause icon when playing, play icon when paused
                playPauseIcon.setAttribute('data-lucide', wasPlaying ? 'play' : 'pause');
                const parent = playPauseIcon.parentElement;
                if (parent) {
                    lucide.createIcons(parent);
                } else {
                    lucide.createIcons();
                }
            }
            showControls();
        });
    }
    
    // Skip backward (10 seconds)
    if (skipBackBtn) {
        skipBackBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.currentTime = Math.max(0, video.currentTime - 10);
            showControls();
        });
    }
    
    // Skip forward (10 seconds)
    if (skipForwardBtn) {
        skipForwardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.currentTime = Math.min(videoPlayerState.duration, video.currentTime + 10);
            showControls();
        });
    }
    
    // Volume controls
    if (muteBtn) {
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            videoPlayerState.isMuted = !videoPlayerState.isMuted;
            video.muted = videoPlayerState.isMuted;
            if (volumeSlider) {
                volumeSlider.value = videoPlayerState.isMuted ? 0 : videoPlayerState.volume;
            }
            updateVideoState();
            showControls();
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            videoPlayerState.volume = vol;
            videoPlayerState.isMuted = vol === 0;
            video.volume = vol;
            video.muted = vol === 0;
            updateVideoState();
            showControls();
        });
        
        // Show volume slider on hover
        if (volumeGroup) {
            volumeGroup.addEventListener('mouseenter', () => {
                const sliderContainer = volumeGroup.querySelector('.video-volume-slider-container');
                if (sliderContainer) sliderContainer.classList.add('show');
            });
            
            volumeGroup.addEventListener('mouseleave', () => {
                const sliderContainer = volumeGroup.querySelector('.video-volume-slider-container');
                if (sliderContainer) sliderContainer.classList.remove('show');
            });
        }
    }
    
    // Playback speed
    const speeds = [0.5, 1, 1.5, 2];
    if (speedBtn) {
        speedBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentIndex = speeds.indexOf(videoPlayerState.playbackRate);
            const nextIndex = (currentIndex + 1) % speeds.length;
            videoPlayerState.playbackRate = speeds[nextIndex];
            video.playbackRate = videoPlayerState.playbackRate;
            if (speedText) speedText.textContent = videoPlayerState.playbackRate + 'x';
            showControls();
        });
    }
    
    // Fullscreen
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
                container.requestFullscreen().then(() => {
                    videoPlayerState.isFullscreen = true;
                    if (fullscreenIcon) {
                        fullscreenIcon.setAttribute('data-lucide', 'minimize');
                        lucide.createIcons();
                    }
                }).catch(err => console.log('Fullscreen error:', err));
            } else {
                document.exitFullscreen().then(() => {
                    videoPlayerState.isFullscreen = false;
                    if (fullscreenIcon) {
                        fullscreenIcon.setAttribute('data-lucide', 'maximize');
                        lucide.createIcons();
                    }
                });
            }
            showControls();
        });
    }
    
    // Fullscreen change listener
    document.addEventListener('fullscreenchange', () => {
        videoPlayerState.isFullscreen = !!document.fullscreenElement;
        if (fullscreenIcon) {
            fullscreenIcon.setAttribute('data-lucide', videoPlayerState.isFullscreen ? 'minimize' : 'maximize');
            lucide.createIcons();
        }
    });

    // Video click to play/pause
    video.addEventListener('click', () => {
        if (videoPlayerState.isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        showControls();
    });
    
    // Mouse move to show controls
    if (container) {
        container.addEventListener('mousemove', () => {
            showControls();
        });
        
        container.addEventListener('mouseleave', () => {
            if (videoPlayerState.isPlaying && !videoPlayerState.addMenuOpen && !videoPlayerState.modalOpen) {
                clearControlsTimeout();
                videoPlayerState.controlsTimeout = setTimeout(() => {
                    if (controlsOverlay) controlsOverlay.style.opacity = '0';
                    videoPlayerState.showControls = false;
                }, 1000);
            }
        });
    }

    // Seek functionality
    if (seekInput) {
        seekInput.addEventListener('input', (e) => {
            const percent = parseFloat(e.target.value);
            if (videoPlayerState.duration) {
                video.currentTime = (percent / 100) * videoPlayerState.duration;
            }
            showControls();
        });
    }

    // Video events
    video.addEventListener('loadedmetadata', () => {
        video.volume = videoPlayerState.volume;
        video.playbackRate = videoPlayerState.playbackRate;
        updateVideoState();
    });

    video.addEventListener('timeupdate', () => {
        updateVideoState();
    });

    video.addEventListener('play', () => {
        videoPlayerState.isPlaying = true;
        // Update icon
        if (playPauseIcon) {
            playPauseIcon.setAttribute('data-lucide', 'pause');
            const parent = playPauseIcon.parentElement;
            if (parent) {
                lucide.createIcons(parent);
            } else {
                lucide.createIcons();
            }
        }
        updateVideoState();
        showControls();
    });

    video.addEventListener('pause', () => {
        videoPlayerState.isPlaying = false;
        // Update icon
        if (playPauseIcon) {
            playPauseIcon.setAttribute('data-lucide', 'play');
            const parent = playPauseIcon.parentElement;
            if (parent) {
                lucide.createIcons(parent);
            } else {
                lucide.createIcons();
            }
        }
        updateVideoState();
        showControls();
    });

    // Add button click
    if (addBtn) {
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            videoPlayerState.addMenuOpen = !videoPlayerState.addMenuOpen;
            if (addMenu) {
                addMenu.classList.toggle('hidden', !videoPlayerState.addMenuOpen);
            }
            if (videoPlayerState.addMenuOpen) {
                video.pause();
                showControls();
            }
            clearControlsTimeout();
        });
    }

    // Add menu item clicks
    if (addMenu) {
        addMenu.querySelectorAll('.video-add-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = item.getAttribute('data-type');
                openContentModal(type);
            });
        });
    }

    function openContentModal(type) {
        videoPlayerState.modalOpen = true;
        videoPlayerState.modalType = type;
        videoPlayerState.capturedTime = videoPlayerState.currentTime;
        videoPlayerState.fromSection = false;
        videoPlayerState.addMenuOpen = false;
        if (addMenu) addMenu.classList.add('hidden');

        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        if (modalTitle) {
            modalTitle.textContent = `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        }

        if (modalBody) {
            if (type === 'note') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <textarea id="note-content-input" class="video-modal-textarea" placeholder="Type your note here..." rows="6"></textarea>
                `;
            } else if (type === 'flashcard') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <div class="video-modal-input-group">
                        <label>Question/Front</label>
                        <input type="text" id="flashcard-front-input" class="video-modal-input" placeholder="Enter question or term">
                    </div>
                    <div class="video-modal-input-group">
                        <label>Answer/Back</label>
                        <textarea id="flashcard-back-input" class="video-modal-textarea" placeholder="Enter answer or explanation" rows="4"></textarea>
                    </div>
                `;
            } else if (type === 'mcq') {
                modalBody.innerHTML = `
                    <div class="video-modal-time">At ${formatVideoTime(videoPlayerState.capturedTime)}</div>
                    <div class="video-modal-input-group">
                        <label>Question</label>
                        <textarea id="mcq-question-input" class="video-modal-textarea" placeholder="Enter question" rows="3"></textarea>
                    </div>
                    <div class="video-modal-input-group">
                        <label>Options (one per line, mark correct answer with *)</label>
                        <textarea id="mcq-options-input" class="video-modal-textarea" placeholder="Option 1\n*Option 2 (correct)\nOption 3\nOption 4" rows="6"></textarea>
                    </div>
                `;
            }
        }

        if (modal) {
            modal.classList.remove('hidden');
            initModalDrag();
        }
        lucide.createIcons();
    }

    let modalDragState = {
        isDragging: false,
        currentX: 0,
        currentY: 0,
        initialX: 0,
        initialY: 0,
        xOffset: 0,
        yOffset: 0,
        initialized: false
    };

    function initModalDrag() {
        const modalContent = document.querySelector('.video-content-modal-content');
        if (!modalContent) return;

        const modalHeader = modalContent.querySelector('.video-content-modal-header');
        if (!modalHeader) return;

        // Only initialize once
        if (modalDragState.initialized) return;
        modalDragState.initialized = true;

        const dragStartHandler = (e) => {
            if (e.target.closest('.video-modal-close')) return;
            
            modalDragState.initialX = e.clientX - modalDragState.xOffset;
            modalDragState.initialY = e.clientY - modalDragState.yOffset;

            if (e.target === modalHeader || modalHeader.contains(e.target)) {
                modalDragState.isDragging = true;
                modalContent.style.transition = 'none';
            }
        };

        const dragHandler = (e) => {
            if (modalDragState.isDragging) {
                e.preventDefault();
                modalDragState.currentX = e.clientX - modalDragState.initialX;
                modalDragState.currentY = e.clientY - modalDragState.initialY;

                modalDragState.xOffset = modalDragState.currentX;
                modalDragState.yOffset = modalDragState.currentY;

                modalContent.style.transform = `translate(${modalDragState.currentX}px, ${modalDragState.currentY}px)`;
            }
        };

        const dragEndHandler = () => {
            if (modalDragState.isDragging) {
                modalDragState.initialX = modalDragState.currentX;
                modalDragState.initialY = modalDragState.currentY;
                modalDragState.isDragging = false;
                modalContent.style.transition = '';
            }
        };

        modalHeader.addEventListener('mousedown', dragStartHandler);
        document.addEventListener('mousemove', dragHandler);
        document.addEventListener('mouseup', dragEndHandler);

        // Reset position when modal is closed
        const observer = new MutationObserver(() => {
            if (modal && modal.classList.contains('hidden')) {
                modalContent.style.transform = 'translate(0, 0)';
                modalDragState.xOffset = 0;
                modalDragState.yOffset = 0;
                modalDragState.currentX = 0;
                modalDragState.currentY = 0;
                modalDragState.initialized = false;
            }
        });
        if (modal) {
            observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
        }
    }

    function closeModal() {
        videoPlayerState.modalOpen = false;
        videoPlayerState.modalType = null;
        videoPlayerState.fromSection = false;
        if (modal) modal.classList.add('hidden');
    }

    function saveContent() {
        const courseData = courseDetailData[state.currentCourseId];
        if (!courseData) return;

        let currentLesson = null;
        let currentSection = null;
        for (const section of courseData.sections) {
            currentLesson = section.lessons.find(l => l.id === state.currentLessonId);
            if (currentLesson) {
                currentSection = section;
                break;
            }
        }
        if (!currentLesson || !currentSection) return;

        const type = videoPlayerState.modalType;
        const time = videoPlayerState.capturedTime;
        const fromSection = videoPlayerState.fromSection;

        if (type === 'note') {
            const contentInput = document.getElementById('note-content-input');
            if (contentInput && contentInput.value.trim()) {
                const noteData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    content: contentInput.value.trim()
                };
                if (fromSection) {
                    // Use first line of content as title, or empty string
                    const firstLine = contentInput.value.trim().split('\n')[0];
                    noteData.title = firstLine || '';
                } else {
                    noteData.title = `Note at ${formatVideoTime(time)}`;
                    noteData.time = time;
                }
                addUserContent('notes', noteData);
                closeModal();
                renderLessonView();
            }
        } else if (type === 'flashcard') {
            const frontInput = document.getElementById('flashcard-front-input');
            const backInput = document.getElementById('flashcard-back-input');
            if (frontInput && backInput && (frontInput.value.trim() || backInput.value.trim())) {
                const flashcardData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    q: frontInput.value.trim() || 'Question',
                    a: backInput.value.trim() || 'Answer'
                };
                if (!fromSection) {
                    flashcardData.time = time;
                }
                addUserContent('flashcards', flashcardData);
                closeModal();
                renderLessonView();
            }
        } else if (type === 'mcq') {
            const questionInput = document.getElementById('mcq-question-input');
            const optionsInput = document.getElementById('mcq-options-input');
            if (questionInput && optionsInput && questionInput.value.trim() && optionsInput.value.trim()) {
                const options = optionsInput.value.split('\n').filter(opt => opt.trim()).map((opt, index) => {
                    const isCorrect = opt.trim().startsWith('*');
                    const text = opt.trim().replace(/^\*/, '').trim();
                    return {
                        text: text || `Option ${index + 1}`,
                        correct: isCorrect,
                        exp: isCorrect ? 'Correct answer.' : 'Incorrect.'
                    };
                });
                
                // Ensure at least one correct answer
                if (!options.some(opt => opt.correct)) {
                    options[0].correct = true;
                    options[0].exp = 'Correct answer.';
                }

                const mcqData = {
                    sid: currentSection.id,
                    tid: currentLesson.id,
                    question: questionInput.value.trim(),
                    options: options
                };
                if (!fromSection) {
                    mcqData.time = time;
                }
                addUserContent('mcqs', mcqData);
                closeModal();
                renderLessonView();
            }
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCancel) modalCancel.addEventListener('click', closeModal);
    if (modalSave) modalSave.addEventListener('click', saveContent);

    // Click outside to close menu
    container.addEventListener('click', (e) => {
        if (e.target === container || e.target === video) {
            if (addMenu && !addMenu.contains(e.target) && !addBtn.contains(e.target)) {
                videoPlayerState.addMenuOpen = false;
                addMenu.classList.add('hidden');
            }
        }
    });

    // Initial state update
    updateVideoState();
    showControls();
    
    // Initialize icons
    lucide.createIcons();
}
