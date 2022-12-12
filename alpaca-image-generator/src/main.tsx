import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AlpacaApp from './AlpacaApp'
import './index.css'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store }>
    <React.StrictMode>
      <AlpacaApp />
    </React.StrictMode>
  </Provider>
)

