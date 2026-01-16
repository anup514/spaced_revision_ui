import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MessageCircle, Send } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addMessage, setCurrentChatCourse } from '../store/slices/chatSlice'

function ChatPage() {
  const dispatch = useDispatch()
  const currentChatCourse = useSelector((state) => state.chat.currentChatCourse)
  const chats = useSelector((state) => state.chat.chats)
  const myCourses = useSelector((state) => state.courses.myCourses)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim() && currentChatCourse) {
      dispatch(addMessage({
        courseId: currentChatCourse,
        message: {
          id: Date.now(),
          text: message,
          timestamp: new Date().toISOString(),
          sender: 'user'
        }
      }))
      setMessage('')
    }
  }

  const currentMessages = currentChatCourse ? (chats[currentChatCourse] || []) : []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex h-[calc(100vh-200px)] gap-6">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-[#0d1b1b] rounded-xl p-4 border border-slate-200 dark:border-white/5">
          <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">My Courses</h2>
          <div className="space-y-2">
            {myCourses.map((course) => (
              <button
                key={course.id}
                onClick={() => dispatch(setCurrentChatCourse(course.id))}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  currentChatCourse === course.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col bg-white dark:bg-[#0d1b1b] rounded-xl border border-slate-200 dark:border-white/5">
          {!currentChatCourse ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <MessageCircle className="w-16 h-16 text-slate-600 dark:text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Select a course to start chatting</h3>
              <p className="text-slate-600 dark:text-slate-400">Choose a course from the list to view and participate in discussions</p>
            </div>
          ) : (
            <>
              <div className="p-4 border-b border-slate-200 dark:border-white/5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {myCourses.find(c => c.id === currentChatCourse)?.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {myCourses.find(c => c.id === currentChatCourse)?.instructor}
                </p>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-white/5 flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
