import { useState, useEffect, useRef } from 'react'
interface Window {
  SpeechRecognition: any
  webkitSpeechRecognition: any
}

// Add TypeScript declarations for Speech Recognition
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

interface UseSpeechRecognitionReturn {
  transcript: string
  isListening: boolean
  startListening: () => void
  stopListening: () => void
  resetTranscript: () => void
  error: string | null
}

export const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = false  
    recognition.interimResults = false  
    recognition.lang = 'en-US'
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      console.log(' Speech recognition started')
      setIsListening(true)
      setError(null)
    }

    recognition.onresult = (event: any) => {
      console.log('🎤 Speech result received:', event)
      const transcript = event.results[0][0].transcript
      console.log('🎤 Final transcript:', transcript)
      setTranscript(transcript)
    }

    recognition.onerror = (event: any) => {
      console.error(' Speech recognition error:', event.error)
      setError(`Speech recognition error: ${event.error}`)
      setIsListening(false)
    }

    recognition.onend = () => {
      console.log(' Speech recognition ended')
      setIsListening(false)
    }

    recognitionRef.current = recognition

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
    }
  }, [])

  const startListening = () => {
    console.log('🎤 Starting speech recognition...')
    if (recognitionRef.current) {
      setTranscript('')  
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    console.log('🎤 Stopping speech recognition...')
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  const resetTranscript = () => {
    setTranscript('')
  }

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
    error
  }
}
