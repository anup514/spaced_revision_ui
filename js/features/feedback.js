// feedback feature module
import { state } from '../core/state.js';

export function renderFeedbackPage() {
    const form = document.getElementById('feedback-form');
    const success = document.getElementById('feedback-success');
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingValue = document.getElementById('feedback-rating-value');

    if (!form) return;

    // Setup star rating
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingValue.value = rating;
            
            // Update star display
            ratingStars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                    s.querySelector('i').setAttribute('data-lucide', 'star');
                } else {
                    s.classList.remove('active');
                    s.querySelector('i').setAttribute('data-lucide', 'star');
                }
            });
            lucide.createIcons();
        });
    });

    // Handle form submission
    form.addEventListener('submit', handleFeedbackSubmit);
}
