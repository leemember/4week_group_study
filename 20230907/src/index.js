import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './app'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StockPage from './pages/Stock'
import AuthGuard from './components/auth/AuthGuard'
import SigninPage from './pages/Signin'

const $root = document.getElementById('root')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})

ReactDOM.createRoot($root).render(
  <QueryClientProvider client={queryClient}>
    <AuthGuard>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SigninPage />} />
          {/* ex: /stock/아이디값을 말함 */}
          <Route path="/stock/:id" element={<StockPage />} />
        </Routes>
      </BrowserRouter>
    </AuthGuard>
  </QueryClientProvider>,
)
