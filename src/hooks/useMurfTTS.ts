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
      console.log('Murf TTS: Attempting to speak:', text)
      setIsSpeaking(true)
      setError(null)

      // Murf TTS API call
      const response = await fetch('https://api.murf.ai/v1/tts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ap2_1d908de7-6f05-4311-ad3d-cefa4621942a`
        },
        body: JSON.stringify({
          text: text,
          voiceId: 'en-US-Neural2-F',
          speed: 1.0,
          pitch: 0,
          outputFormat: 'mp3'
        })
      })

      console.log('Murf API Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `API Error: ${response.status}`)
      }

      const data = await response.json()
      console.log('Murf API Response data:', data)

      if (data.audioUrl) {
        const audio = new Audio(data.audioUrl)
        
        audio.onended = () => {
          console.log('Murf audio ended')
          setIsSpeaking(false)
        }

        audio.onerror = (e) => {
          console.error('Murf audio error:', e)
          setIsSpeaking(false)
          setError('Failed to play Murf audio')
        }

        await audio.play()
        console.log('Murf audio started playing')
      } else {
        throw new Error('No audio URL received from Murf API')
      }
    } catch (err) {
      console.error('Murf TTS Error:', err)
      setIsSpeaking(false)
      setError(err instanceof Error ? err.message : 'Unknown Murf API error')
    }
  }

  const stop = () => {
    console.log('Stopping Murf TTS')
    setIsSpeaking(false)
  }

  return {
    isSpeaking,
    speak,
    stop,
    error
  }
}
