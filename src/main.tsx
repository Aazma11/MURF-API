import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced root rendering with error boundary and performance optimizations
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Add entrance animation delay
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <div className="app-container">
        <App />
      </div>
    </React.StrictMode>,
  );
}, 100);

// Add some additional styling for the app container
const style = document.createElement('style');
style.textContent = `
  .app-container {
    animation: appEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 100vh;
    padding: 2rem;
  }
  
  @keyframes appEntrance {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .app-container {
      padding: 1rem;
    }
  }
`;
document.head.appendChild(style);
