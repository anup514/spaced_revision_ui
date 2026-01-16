import { useState } from 'react'
import { RotateCw, Check, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setRevealState } from '../../store/slices/courseDetailSlice'

function Flashcard({ flashcard, onNext, onPrevious }) {
  const dispatch = useDispatch()
  const revealStates = useSelector((state) => state.courseDetail.revealStates)
  const isRevealed = revealStates[flashcard.id] || false
  const [isFlipping, setIsFlipping] = useState(false)

  const handleFlip = () => {
    setIsFlipping(true)
    setTimeout(() => {
      dispatch(setRevealState({ id: flashcard.id, revealed: !isRevealed }))
      setIsFlipping(false)
    }, 150)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative h-96 perspective-1000 ${isFlipping ? 'flipping' : ''}`}
        onClick={handleFlip}
      >
        <div className={`absolute inset-0 preserve-3d transition-transform duration-300 ${isRevealed ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className={`absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 flex flex-col items-center justify-center text-white shadow-xl ${!isRevealed ? 'z-10' : ''}`}>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Question</h3>
              <p className="text-lg">{flashcard.q}</p>
            </div>
            <button className="mt-8 flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors">
              <RotateCw className="w-4 h-4" />
              Click to reveal answer
            </button>
          </div>

          {/* Back */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 flex flex-col items-center justify-center text-white shadow-xl ${isRevealed ? 'z-10' : ''}`}>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Answer</h3>
              <p className="text-lg">{flashcard.a}</p>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle incorrect
                  if (onNext) onNext('incorrect')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg backdrop-blur-sm transition-colors"
              >
                <X className="w-4 h-4" />
                Incorrect
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle correct
                  if (onNext) onNext('correct')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg backdrop-blur-sm transition-colors"
              >
                <Check className="w-4 h-4" />
                Correct
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-text-primary-light dark:text-text-primary-dark rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => onNext && onNext('skip')}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Flashcard
