// chat feature module
import { state } from '../core/state.js';

export function renderChatPage() {
    renderCourseList();
    
    // If a course is selected, show its chat
    if (state.currentChatCourse) {
        renderChatMessages(state.currentChatCourse);
    } else {
        showChatEmptyState();
    }
}
