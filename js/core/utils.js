// Utility Functions

// Helper function to format video time
export function formatVideoTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// Helper function to format course validity (remaining time)
export function formatCourseValidity(expiryDate) {
    if (!expiryDate) return '';
    
    const now = new Date();
    const expiry = new Date(expiryDate);
    expiry.setHours(23, 59, 59, 999); // Set to end of day
    
    const diffTime = expiry - now;
    
    if (diffTime < 0) {
        return 'Expired';
    }
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Expires today';
    } else if (diffDays < 7) {
        return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} remaining`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} remaining`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} remaining`;
    } else {
        const years = Math.floor(diffDays / 365);
        const remainingDays = diffDays % 365;
        if (remainingDays >= 30) {
            const months = Math.floor(remainingDays / 30);
            return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'} remaining`;
        }
        return `${years} ${years === 1 ? 'year' : 'years'} remaining`;
    }
}

// Helper function to format EMI due date
export function formatEMIDueDate(emiDueDate) {
    if (!emiDueDate) return '';
    
    const now = new Date();
    const dueDate = new Date(emiDueDate);
    dueDate.setHours(23, 59, 59, 999); // Set to end of day
    
    const diffTime = dueDate - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        return 'Overdue';
    } else if (diffDays === 0) {
        return 'Due today';
    } else if (diffDays === 1) {
        return 'Due tomorrow';
    } else if (diffDays < 7) {
        return `Due in ${diffDays} days`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `Due in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else {
        const months = Math.floor(diffDays / 30);
        return `Due in ${months} ${months === 1 ? 'month' : 'months'}`;
    }
}

// Helper function to format date for display
export function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}
