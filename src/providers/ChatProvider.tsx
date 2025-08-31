import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface ChatMessage {
  id: string
  text: string
  timestamp: Date
  type: 'user' | 'system'
}

interface ChatState {
  messages: ChatMessage[]
  currentASLText: string
  currentGesture: string | null
  isProcessing: boolean
}

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: ChatMessage }
  | { type: 'SET_ASL_TEXT'; payload: string }
  | { type: 'SET_CURRENT_GESTURE'; payload: string | null }
  | { type: 'SET_PROCESSING'; payload: boolean }
  | { type: 'CLEAR_MESSAGES' }

const initialState: ChatState = {
  messages: [],
  currentASLText: '',
  currentGesture: null,
  isProcessing: false
}

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case 'SET_ASL_TEXT':
      return {
        ...state,
        currentASLText: action.payload
      }
    case 'SET_CURRENT_GESTURE':
      return {
        ...state,
        currentGesture: action.payload
      }
    case 'SET_PROCESSING':
      return {
        ...state,
        isProcessing: action.payload
      }
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: []
      }
    default:
      return state
  }
}

interface ChatContextType {
  state: ChatState
  dispatch: React.Dispatch<ChatAction>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
