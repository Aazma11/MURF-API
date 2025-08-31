import VoiceInput from './components/VoiceInput'
import ChatInterface from './components/ChatInterface'
import GestureDisplay from './components/GestureDisplay'
import { ChatProvider } from './providers/ChatProvider'

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10 max-w-7xl">
          {/* Enhanced Header */}
          <header className="text-center mb-12">
            <h1 className="page-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Speak, Learn and Practice ASL with AI-Powered Feedback
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Master American Sign Language with intelligent feedback and interactive practice
            </p>
            
            {/* Animated accent line */}
            <div className="flex justify-center mt-6">
              <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-pulse"></div>
            </div>
          </header>
                  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="space-y-8">
              <div className="voice-input">
                <VoiceInput />
              </div>
              <div className="conversation">
                <ChatInterface />
              </div>
            </div>
            <div className="space-y-8">
              <div className="asl-gesture">
                <GestureDisplay />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}</style>
      </div>
    </ChatProvider>
  )
}

export default App