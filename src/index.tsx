import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/redux/store'
import App from '@/components/app'

import 'normalize.css'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)