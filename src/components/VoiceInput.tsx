import React, { useState, useEffect } from 'react'
import { Mic, MicOff, Send } from 'lucide-react'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'
import { useChat } from '../providers/ChatProvider'
import { getGesture } from '../utils/aslMapping'

const VoiceInput: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const { transcript, isListening, startListening, stopListening, resetTranscript, error } = useSpeechRecognition()
  const { dispatch } = useChat()

  // Auto-process transcript when it changes
  useEffect(() => {
    if (transcript && transcript.trim()) {
      console.log(' SPEECH DETECTED:', transcript)
      processMessage(transcript)
    }
  }, [transcript])

  const processMessage = (textToSend: string) => {
    if (!textToSend.trim()) return

    console.log(' PROCESSING MESSAGE:', textToSend)

    const message = {
      id: Date.now().toString(),
      text: textToSend,
      timestamp: new Date(),
      type: 'user' as const
    }

    dispatch({ type: 'ADD_MESSAGE', payload: message })
    dispatch({ type: 'SET_ASL_TEXT', payload: textToSend })
    dispatch({ type: 'SET_PROCESSING', payload: true })

    // Process ASL gesture
    setTimeout(() => {
      dispatch({ type: 'SET_PROCESSING', payload: false })
      
      // First try to match the entire phrase
      const cleanText = textToSend.toLowerCase().trim()
      console.log(' LOOKING FOR PHRASE:', cleanText)
      let gesture = getGesture(cleanText)
      
      // If no phrase match, try the first word
      if (!gesture) {
        const firstWord = cleanText.split(' ')[0]
        console.log('🔍 LOOKING FOR WORD:', firstWord)
        gesture = getGesture(firstWord)
      }
      
      if (gesture) {
        console.log('✅ FOUND GESTURE:', gesture.name)
        dispatch({ type: 'SET_CURRENT_GESTURE', payload: cleanText })
      } else {
        console.log('❌ NO GESTURE FOUND FOR:', cleanText)
        dispatch({ type: 'SET_CURRENT_GESTURE', payload: null })
      }
    }, 1000)
  }

  const handleSendMessage = () => {
    const textToSend = inputText.trim() || transcript.trim()
    processMessage(textToSend)
    setInputText('')
    resetTranscript()
  }

  const handleVoiceToggle = () => {
    console.log(' VOICE TOGGLE CLICKED')
    if (isListening) {
      console.log(' STOPPING LISTENING')
      stopListening()
    } else {
      console.log(' STARTING LISTENING')
      startListening()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Voice Input</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleVoiceToggle}
            className={`p-4 rounded-full transition-all duration-200 ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isListening ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
          
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-2">
              {isListening ? 'Listening...' : 'Click to start voice input'}
            </div>
            {transcript && (
              <div className="text-sm text-gray-800 bg-gray-100 p-2 rounded">
                {transcript}
              </div>
            )}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Or type your message here..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VoiceInput
