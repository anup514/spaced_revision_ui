// notifications feature module
import { state } from '../core/state.js';

export function renderNotificationsPage() {
    const container = document.getElementById('notifications-list');
    const emptyState = document.getElementById('notifications-empty');
    
    if (!container) return;

    const unreadCount = state.notifications.filter(n => !n.read).length;
    updateNotificationBadge(unreadCount);

    if (state.notifications.length === 0) {
        if (container) container.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (container) container.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    // Sort notifications: unread first, then by timestamp
    const sorted = [...state.notifications].sort((a, b) => {
        if (a.read !== b.read) return a.read ? 1 : -1;
        return b.timestamp - a.timestamp;
    });

    container.innerHTML = sorted.map(notif => {
        const icon = getNotificationIcon(notif.type);
        const timeAgo = formatTimeAgo(notif.timestamp);
        
        return `
            <div class="notification-item ${notif.read ? 'read' : 'unread'}" data-notification-id="${notif.id}">
                <div class="notification-icon">
                    <i data-lucide="${icon}"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-header">
                        <h4 class="notification-title">${escapeHtml(notif.title)}</h4>
                        <span class="notification-time">${timeAgo}</span>
                    </div>
                    <p class="notification-description">${escapeHtml(notif.description)}</p>
                </div>
                <div class="notification-actions">
                    ${!notif.read ? `
                        <button class="notification-action-btn" data-action="read" title="Mark as read">
                            <i data-lucide="check"></i>
                        </button>
                    ` : ''}
                    <button class="notification-action-btn" data-action="dismiss" title="Dismiss">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Setup event listeners
    container.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.notification-actions')) {
                const id = parseInt(item.getAttribute('data-notification-id'));
                toggleNotificationRead(id);
            }
        });
    });

    container.querySelectorAll('.notification-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = btn.closest('.notification-item');
            const id = parseInt(item.getAttribute('data-notification-id'));
            const action = btn.getAttribute('data-action');
            
            if (action === 'read') {
                toggleNotificationRead(id);
            } else if (action === 'dismiss') {
                dismissNotification(id);
            }
        });
    });

    // Setup mark all as read
    const markAllReadBtn = document.getElementById('mark-all-read-btn');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllNotificationsRead);
    }

    lucide.createIcons();
}
