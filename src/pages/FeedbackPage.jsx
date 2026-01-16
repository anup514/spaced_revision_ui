import { useState } from 'react'
import { Star, CheckCircle } from 'lucide-react'

function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setRating(0)
      setCategory('')
      setSubject('')
      setMessage('')
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">Thank you for your feedback!</h3>
        <p className="text-slate-600 dark:text-slate-400">We appreciate you taking the time to share your thoughts with us.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Share Your Feedback</h1>
        <p className="text-slate-600 dark:text-slate-400">We'd love to hear from you! Your feedback helps us improve.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-900 dark:text-white">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2 text-slate-900 dark:text-white">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a category</option>
            <option value="general">General</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="course">Course Feedback</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Brief description of your feedback"
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder="Tell us more about your feedback..."
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default FeedbackPage
