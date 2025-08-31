import React from 'react'
import { useChat } from '../providers/ChatProvider'
import { Trash2 } from 'lucide-react'

const ChatInterface: React.FC = () => {
  const { state, dispatch } = useChat()

  const clearMessages = () => {
    dispatch({ type: 'CLEAR_MESSAGES' })
    dispatch({ type: 'SET_ASL_TEXT', payload: '' })
    dispatch({ type: 'SET_CURRENT_GESTURE', payload: null })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Conversation</h2>
        {state.messages.length > 0 && (
          <button
            onClick={clearMessages}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      <div className="h-64 overflow-y-auto space-y-3">
        {state.messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Start speaking or typing to see your messages here
          </div>
        ) : (
          state.messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-100 text-blue-900 ml-8'
                  : 'bg-gray-100 text-gray-900 mr-8'
              }`}
            >
              <div className="text-sm">{message.text}</div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </div>

      {state.isProcessing && (
        <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
            <span>Converting to ASL gestures...</span>
          </div>
        </div>
      )}

      {state.currentGesture && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
          <div className="text-sm font-medium">Current Gesture: {state.currentGesture}</div>
        </div>
      )}
    </div>
  )
}

export default ChatInterface
