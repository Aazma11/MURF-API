import React from 'react'
import VoiceInput from './components/VoiceInput'
import ChatInterface from './components/ChatInterface'
import GestureDisplay from './components/GestureDisplay'
import { ChatProvider } from './providers/ChatProvider'

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Speak, Learn, and Practice ASL with AI-Powered Feedback
            </h1>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <VoiceInput />
              <ChatInterface />
            </div>
            <div className="space-y-6">
              <GestureDisplay />
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  )
}

export default App
