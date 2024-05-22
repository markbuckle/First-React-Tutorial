import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// Using ReactDOM to render the component tree inside an element with the id of root
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // App component wrapped in the StrictMode component, rendered within ElementID root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
