import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from 'react-router-dom'

import userSlice from './features/redux/userSlice'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import App from './App'
import './index.css'


const store = configureStore({
  reducer: {
    user: userSlice,
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
    
    
  </React.StrictMode>
)
