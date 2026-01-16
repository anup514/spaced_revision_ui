// courses feature module
import { state } from '../core/state.js';

export function renderMyCourses() {
    
    const container = document.getElementById('my-courses-container');
    
    if (!container) {
        
        return;
    }

    container.innerHTML = state.myCourses.map(course => `
        <div class="my-course-card" data-course-id="${course.id}">
            <div class="my-course-image-wrapper">
                <img src="${course.image}" alt="${course.title}" class="my-course-image">
                <div class="my-course-overlay">
                    <i data-lucide="play-circle"></i>
                </div>
            </div>
            <div class="my-course-content">
                <div>
                    <h4 class="my-course-title">${course.title}</h4>
                    <p class="my-course-instructor">By ${course.instructor}</p>
                    <div class="my-course-badge">
                        <i data-lucide="zap"></i>
                        ${course.nextDue} DUE TODAY
                    </div>
                </div>
                <div>
                    <div class="my-course-progress-header">
                        <span class="my-course-progress-label">Mastery</span>
                        <span class="my-course-progress-value">${course.progress}%</span>
                    </div>
                    <div class="my-course-progress-bar">
                        <div class="my-course-progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers to course cards
    container.querySelectorAll('.my-course-card').forEach(card => {
        card.addEventListener('click', () => {
            const courseId = parseInt(card.getAttribute('data-course-id'));
            showCourseDetail(courseId);
        });
    });
    

    try {
        lucide.createIcons();
        
    } catch (e) {
        
    }
    
}

export function renderCommunityCourses() {
    
    const container = document.getElementById('community-courses-container');
    
    if (!container) {
        
        return;
    }

    container.innerHTML = state.communityCourses.map(course => {
        const isLiked = state.likedCourses.has(course.id);
        return `
            <div class="community-course-card" data-course-id="${course.id}">
                <div class="community-course-image-wrapper">
                    <img src="${course.image}" alt="${course.title}" class="community-course-image">
                    <div class="community-course-image-overlay"></div>
                    <div class="community-course-badges">
                        ${course.isBestseller ? '<span class="community-course-bestseller">Bestseller</span>' : ''}
                        <span class="community-course-new-batch">New Batch</span>
                    </div>
                    <div class="community-course-students">
                        <i data-lucide="users"></i>
                        ${course.students}
                    </div>
                    <button class="community-course-like-btn ${isLiked ? 'liked' : ''}" data-course-id="${course.id}">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="community-course-content">
                    <div class="community-course-header">
                        <span class="community-course-category">${course.category}</span>
                        <div class="community-course-rating">
                            <span class="community-course-rating-value">${course.rating}</span>
                            <span class="community-course-reviews">(${course.reviews})</span>
                        </div>
                    </div>
                    <h3 class="community-course-title">${course.title}</h3>
                    <div class="community-course-instructor">
                        <div class="community-course-instructor-avatar">
                            <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
                        </div>
                        <span class="community-course-instructor-name">By ${course.instructor.name}</span>
                    </div>
                    <div class="community-course-stats">
                        <div class="community-course-stat-item">
                            <i data-lucide="zap" class="community-course-stat-icon"></i>
                            <span class="community-course-stat-label">Top Rated</span>
                        </div>
                        <div class="community-course-stat-item">
                            <i data-lucide="calendar" class="community-course-stat-icon"></i>
                            <span class="community-course-stat-label">${course.validity}</span>
                        </div>
                    </div>
                    <div class="community-course-pricing">
                        <div class="community-course-price-row">
                            <div class="community-course-price-header">
                                <div class="community-course-price">
                                    <span class="community-course-price-value">₹${course.price}</span>
                                    <span class="community-course-price-original">₹${course.originalPrice}</span>
                                </div>
                            </div>
                            <div class="community-course-emi">
                                <i data-lucide="credit-card"></i>
                                <span class="community-course-emi-text">EMI: <span>₹${course.emi} × ${course.emiDuration}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers to course cards
    container.querySelectorAll('.community-course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on like button
            if (e.target.closest('.community-course-like-btn')) {
                return;
            }
            const courseId = parseInt(card.getAttribute('data-course-id'));
            showCommunityCourseDetail(courseId);
        });
    });

    // Setup like button event listeners
    setupLikeButtons();
    
    try {
        lucide.createIcons();
        
    } catch (e) {
        
    }
    
}

export function showCourseDetail(courseId) {
    state.currentCourseId = courseId;
    showPage('course-detail');
}

export function toggleLike(courseId) {
    if (state.likedCourses.has(courseId)) {
        state.likedCourses.delete(courseId);
    } else {
        state.likedCourses.add(courseId);
    }

    // Save to localStorage
    localStorage.setItem('likedCourses', JSON.stringify(Array.from(state.likedCourses)));

    // Update UI
    const buttons = document.querySelectorAll(`.community-course-like-btn[data-course-id="${courseId}"], .community-course-detail-like-btn[data-course-id="${courseId}"]`);
    buttons.forEach(button => {
        if (state.likedCourses.has(courseId)) {
            button.classList.add('liked');
        } else {
            button.classList.remove('liked');
        }
    });
    
    // Update dropdown count
    updateLikedCoursesCount();
    
    lucide.createIcons();
}

export function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.community-course-like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const courseId = parseInt(button.getAttribute('data-course-id'));
            toggleLike(courseId);
        });
    });
}
