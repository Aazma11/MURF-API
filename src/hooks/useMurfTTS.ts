import { useState } from 'react'

interface UseMurfTTSReturn {
  isSpeaking: boolean
  speak: (text: string) => Promise<void>
  stop: () => void
  error: string | null
}

export const useMurfTTS = (): UseMurfTTSReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const speak = async (text: string) => {
    try {
      console.log('Speaking:', text)
      setIsSpeaking(true)
      setError(null)

      // Use browser speech synthesis
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.8
        utterance.pitch = 1
        utterance.volume = 1
        
        utterance.onend = () => {
          setIsSpeaking(false)
        }
        
        utterance.onerror = (event) => {
          setError('Speech synthesis failed')
          setIsSpeaking(false)
        }
        
        speechSynthesis.speak(utterance)
      } else {
        throw new Error('Speech synthesis not supported')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      setIsSpeaking(false)
    }
  }

  const stop = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
    }
    setIsSpeaking(false)
    setError(null)
  }

  return { speak, isSpeaking, stop, error }
}
