# ASL Learning Assistant

An interactive American Sign Language learning application that helps users learn ASL through voice recognition, text input, and visual gesture instructions.

## Features

- 🎤 **Voice Recognition**: Speak words and see them converted to text
- 📝 **Text Input**: Type words manually as an alternative
- 🤲 **ASL Gesture Display**: See detailed instructions for each ASL sign
- 🔊 **Voice Instructions**: Audio guidance for learning gestures (Murf TTS)
- 💬 **Chat Interface**: Conversation history with timestamps
- 🎯 **Real-time Processing**: Instant gesture recognition and display

## Supported Words

- Hello/Hi
- Thank you/Thanks
- Yes/No
- Please/Sorry
- Help/Love
- And more...

## Technology Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Voice Recognition**: Web Speech API
- **Text-to-Speech**: Murf TTS API
- **Build Tool**: Vite

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd ASL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Start speaking or typing to see ASL gestures

## Usage

1. **Voice Input**: Click the microphone button and speak words like "hello"
2. **Text Input**: Type words in the text field and press Enter
3. **Learn Gestures**: See detailed ASL instructions for each word
4. **Voice Guidance**: Listen to audio instructions for each gesture

## Project Structure

```
ASL/
├── src/
│   ├── components/
│   │   ├── VoiceInput.tsx          # Voice recognition
│   │   ├── ChatInterface.tsx       # Chat display
│   │   └── GestureDisplay.tsx      # ASL gesture display
│   ├── hooks/
│   │   ├── useSpeechRecognition.ts # Voice input
│   │   └── useMurfTTS.ts           # Murf TTS
│   ├── providers/
│   │   └── ChatProvider.tsx        # State management
│   ├── utils/
│   │   └── aslMapping.ts           # ASL gestures
│   └── App.tsx                     # Main app
```

## Contributing

This project was created for the Murf API hackathon. Feel free to contribute improvements!

## License

MIT License
