import { useState, useRef } from 'react'

interface UseMurfTTSReturn {
  isSpeaking: boolean
  speak: (text: string) => Promise<void>
  stop: () => void
  error: string | null
}

export const useMurfTTS = (): UseMurfTTSReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = async (text: string) => {
    try {
      console.log('🎤 Attempting to speak:', text)
      
      
      stop()
      
      setIsSpeaking(true)
      setError(null)

      
      if (!('speechSynthesis' in window)) {
        throw new Error('Speech synthesis not supported in this browser')
      }

      
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel()
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 1
      utteranceRef.current = utterance
      
      
      utterance.onstart = () => {
        console.log('🎤 Speech started successfully')
      }
      
      utterance.onend = () => {
        console.log('🎤 Speech ended')
        setIsSpeaking(false)
        utteranceRef.current = null
      }
      
      utterance.onerror = (event) => {
        console.error('🎤 Speech error:', event.error)
        if (event.error !== 'interrupted') {
          setError(`Speech error: ${event.error}`)
        }
        setIsSpeaking(false)
        utteranceRef.current = null
      }
      
      
      window.speechSynthesis.speak(utterance)
     
      setTimeout(() => {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume()
        }
      }, 50)
      
    } catch (err) {
      console.error(' TTS Error:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
      setIsSpeaking(false)
    }
  }

  const stop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    if (utteranceRef.current) {
      utteranceRef.current.onend = null
      utteranceRef.current.onerror = null
      utteranceRef.current = null
    }
    setIsSpeaking(false)
    setError(null)
  }

  return { speak, isSpeaking, stop, error }
}
