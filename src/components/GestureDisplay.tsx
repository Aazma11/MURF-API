import React, { useEffect } from 'react'
import { useChat } from '../providers/ChatProvider'
import { getGesture } from '../utils/aslMapping'
import { useMurfTTS } from '../hooks/useMurfTTS'
import { Volume2, VolumeX } from 'lucide-react'

const GestureDisplay: React.FC = () => {
  const { state } = useChat()
  const { speak, isSpeaking, stop, error } = useMurfTTS()
  
  const currentGesture = state.currentGesture ? getGesture(state.currentGesture) : null

  // Test voice function
  const testVoice = async () => {
    console.log('=== TEST VOICE BUTTON CLICKED ===')
    try {
      await speak("Hello! This is a test of the voice system.")
    } catch (err) {
      console.error('Voice test error:', err)
    }
  }

  // Auto-speak when gesture changes
  useEffect(() => {
    console.log('=== GESTURE CHANGED ===')
    console.log('Current gesture:', currentGesture?.name)
    console.log('Is processing:', state.isProcessing)
    
    if (currentGesture && !state.isProcessing) {
      const instructionText = `Great! Now let's learn the sign for "${currentGesture.name}". ${currentGesture.instructions}. Ready to practice?`
      console.log('Auto-speaking:', instructionText)
      speak(instructionText).catch(err => {
        console.error('Auto-speak error:', err)
      })
    }
  }, [currentGesture, state.isProcessing, speak])

  const handleManualSpeak = async () => {
    console.log('=== MANUAL SPEAK CLICKED ===')
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
    console.log('=== VOICE TOGGLE CLICKED ===')
    if (isSpeaking) {
      stop()
    } else {
      await handleManualSpeak()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">ASL Gesture</h2>
        <div className="flex space-x-2">
          <button
            onClick={testVoice}
            className="px-3 py-1 bg-purple-500 text-white rounded text-sm"
          >
            Test Voice
          </button>
          {currentGesture && (
            <button
              onClick={handleVoiceToggle}
              className={`p-2 rounded-full transition-colors ${
                isSpeaking 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
              title={isSpeaking ? 'Stop voice' : 'Play voice instructions'}
            >
              {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
          <strong>TTS Error:</strong> {error}
        </div>
      )}
      
      {currentGesture ? (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {currentGesture.name}
            </h3>
            <p className="text-blue-800">
              {currentGesture.description}
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">How to Sign:</h4>
            <p className="text-green-800">
              {currentGesture.instructions}
            </p>
          </div>
          
          <div className="text-sm text-gray-600">
            Category: {currentGesture.category}
          </div>

          {isSpeaking && (
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="animate-pulse">🔊</div>
              <span className="text-sm">Speaking instructions...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-4"></div>
          <p>Speak a word to see its ASL sign</p>
          <p className="text-sm mt-2">Try: "hello", "thank you", "yes", "no"</p>
        </div>
      )}
    </div>
  )
}

export default GestureDisplay
