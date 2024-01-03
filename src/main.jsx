import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root/Root.jsx'
import Heart from './pages/Heart/Heart.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Menu from './pages/Menu/Menu.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import Register from './pages/Auth/Register/Register.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Protected from './components/Protected.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected><Root /></Protected>,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/heart',
        element: <Heart />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register /> 
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
