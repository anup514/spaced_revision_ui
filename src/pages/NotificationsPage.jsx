import { useSelector, useDispatch } from 'react-redux'
import { BellOff, CheckCheck } from 'lucide-react'
import { markAllAsRead, markAsRead } from '../store/slices/notificationsSlice'

function NotificationsPage() {
  const dispatch = useDispatch()
  const notifications = useSelector((state) => state.notifications.notifications)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Notifications</h1>
        {notifications.length > 0 && (
          <button
            onClick={() => dispatch(markAllAsRead())}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="text-center py-16">
          <BellOff className="w-16 h-16 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">No notifications</h3>
          <p className="text-slate-600 dark:text-slate-400">You're all caught up! Check back later for updates.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.read && dispatch(markAsRead(notification.id))}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                notification.read
                  ? 'bg-white dark:bg-[#0d1b1b] border-slate-200 dark:border-white/5'
                  : 'bg-primary/10 border-primary/20'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-slate-900 dark:text-white">{notification.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{notification.message}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{notification.timestamp}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-primary rounded-full ml-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NotificationsPage
