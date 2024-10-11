import React from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n';

import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter >
    <AuthProvider >
      <QueryClientProvider client={queryClient}>
        <Routes >
          <Route path="/*" element={<App />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
)
