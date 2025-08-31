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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Conversation</h2>
        {state.messages.length > 0 && (
          <button
            onClick={clearMessages}
            className="text-gray-500 hover:text-red-400 transition-colors p-2 hover:bg-red-50 rounded-lg"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      <div className="h-64 overflow-y-auto space-y-3 mb-6">
        {state.messages.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg mb-2">No messages yet</p>
            <p className="text-sm">Start speaking to see your conversation history</p>
          </div>
        ) : (
          state.messages.map((message) => (
            <div
              key={message.id}
              className="bg-blue-100 p-4 rounded-xl shadow-sm ml-8"
            >
              <div className="text-gray-800 font-medium">{message.text}</div>
              <div className="text-gray-500 text-sm mt-2">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </div>

      {state.currentGesture && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-xl">
          <div className="font-medium">Current Gesture: {state.currentGesture}</div>
        </div>
      )}
    </div>
  )
}

export default ChatInterface
