import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setQuizAnswer } from '../../store/slices/courseDetailSlice'

function MCQ({ mcq, onNext, onPrevious }) {
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleSelectOption = (optionIndex) => {
    setSelectedOption(optionIndex)
    dispatch(setQuizAnswer({ id: mcq.id, answer: optionIndex }))
    setShowExplanation(true)
  }

  const handleNext = () => {
    setSelectedOption(null)
    setShowExplanation(false)
    if (onNext) onNext()
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white dark:bg-[#0d1b1b] rounded-xl p-8 border border-slate-200 dark:border-white/5">
        <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
          {mcq.question}
        </h3>

        <div className="space-y-3 mb-6">
          {mcq.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrect = option.correct
            const showResult = showExplanation && isSelected

            return (
              <button
                key={index}
                onClick={() => !showExplanation && handleSelectOption(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-slate-200 dark:border-white/5 hover:border-primary/50 bg-slate-50 dark:bg-[#050505]'
                } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-3">
                  {showResult && (
                    <div className="mt-1">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 dark:text-white mb-1">
                      {option.text}
                    </div>
                    {showResult && (
                      <div className={`text-sm mt-2 ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                        {option.exp}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5">
            <button
              onClick={handleNext}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
            >
              Next Question
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onPrevious}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-slate-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Previous
        </button>
      </div>
    </div>
  )
}

export default MCQ
