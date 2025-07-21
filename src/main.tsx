import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug information for GitHub Pages
console.log('🚀 The Forgotten Trial - Loading Application');
console.log('📍 Current URL:', window.location.href);
console.log('🎯 Base URL:', document.baseURI);

createRoot(document.getElementById("root")!).render(<App />);
