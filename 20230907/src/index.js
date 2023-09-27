import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './app'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StockPage from './pages/Stock'
import AuthGuard from './components/auth/AuthGuard'
import SigninPage from './pages/Signin'
import NavBar from './components/shared/NavBar'
import { RecoilRoot } from 'recoil'
import ErrorBoundary from './components/shared/ErrorBoundary'
import PrivateRoute from './components/auth/PrivateRoute'

const $root = document.getElementById('root')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})

ReactDOM.createRoot($root).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <AuthGuard>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Suspense
                    fallback={
                      <div
                        style={{
                          width: '100%',
                          height: '400px',
                          background: 'pink',
                        }}
                      >
                        <h3>로딩중...</h3>
                      </div>
                    }
                  >
                    <App />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="/signin" element={<SigninPage />} />
            <Route
              path="/buy"
              element={
                <PrivateRoute>
                  <div>구매하기</div>
                </PrivateRoute>
              }
            />
            {/* ex: /stock/아이디값을 말함 */}
            <Route path="/stock/:id" element={<StockPage />} />
          </Routes>
        </BrowserRouter>
      </AuthGuard>
    </RecoilRoot>
  </QueryClientProvider>,
)
