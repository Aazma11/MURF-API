import React, { useEffect, useRef } from 'react'
import { useChat } from '../providers/ChatProvider'
import { getGesture } from '../utils/aslMapping'
import { useMurfTTS } from '../hooks/useMurfTTS'
import { Volume2, VolumeX, Play } from 'lucide-react'

const GestureDisplay: React.FC = () => {
  const { state } = useChat()
  const { speak, isSpeaking, stop, error } = useMurfTTS()
  const lastGestureRef = useRef<string | null>(null)
  
  const currentGesture = state.currentGesture ? getGesture(state.currentGesture) : null

  // Test voice function
  const testVoice = async () => {
    console.log('🎤 Testing voice system...')
    try {
      await speak("Hello! This is a test of the voice system. Can you hear me?")
    } catch (err) {
      console.error('Voice test error:', err)
    }
  }

  // Auto-speak when gesture changes (prevent multiple calls)
  useEffect(() => {
    if (currentGesture && !state.isProcessing && lastGestureRef.current !== currentGesture.name) {
      lastGestureRef.current = currentGesture.name
      
      const instructionText = `Great! Now let's learn the sign for "${currentGesture.name}". ${currentGesture.instructions}. Ready to practice?`
      console.log('🎤 Auto-speaking:', instructionText)
      
      // Add a small delay to prevent interruption
      setTimeout(() => {
        speak(instructionText).catch(err => {
          console.error('Auto-speak error:', err)
        })
      }, 100)
    }
  }, [currentGesture, state.isProcessing, speak])

  const handleManualSpeak = async () => {
    if (currentGesture) {
      const instructionText = `Great! Now let's learn the sign for "${currentGesture.name}". ${currentGesture.instructions}. Ready to practice?`
      try {
        await speak(instructionText)
      } catch (err) {
        console.error('Manual speak error:', err)
      }
    }
  }

  const handleVoiceToggle = async () => {
    if (isSpeaking) {
      stop()
    } else {
      await handleManualSpeak()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">ASL Gesture</h2>
        <div className="flex space-x-3">
          <button
            onClick={testVoice}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-200"
          >
            Test Voice
          </button>
          {currentGesture && (
            <button
              onClick={handleVoiceToggle}
              className={`p-3 rounded-lg transition-all duration-200 ${
                isSpeaking 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              title={isSpeaking ? 'Stop voice' : 'Play voice instructions'}
            >
              {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">
          <strong>Voice Error:</strong> {error}
        </div>
      )}
      
      {currentGesture ? (
        <div className="space-y-6">
          {/* Gesture Header */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {currentGesture.name}
            </h3>
            <p className="text-gray-600 text-lg">
              {currentGesture.description}
            </p>
          </div>
          
          {/* Instructions */}
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-semibold text-gray-800 mb-3">
              How to Sign:
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentGesture.instructions}
            </p>
          </div>
          
          {/* Category */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-gray-600 text-center">
              Category: <span className="text-purple-600 font-semibold">{currentGesture.category}</span>
            </div>
          </div>

          {isSpeaking && (
            <div className="flex items-center justify-center space-x-3 text-blue-600 bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="animate-pulse">🔊</div>
              <span className="font-semibold">Murf TTS speaking instructions...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <div className="text-6xl mb-6">🎤</div>
          <p className="text-xl mb-4 text-gray-400">Ready to learn ASL?</p>
          <p className="text-lg mb-6">Speak a word to see its sign language gesture</p>
        </div>
      )}
    </div>
  )
}

export default GestureDisplay
