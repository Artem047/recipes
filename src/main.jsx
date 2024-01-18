import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root/Root.jsx'
import Heart from './pages/Heart/Heart.jsx'
import Profile from './pages/Profile/Profile.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import Register from './pages/Auth/Register/Register.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Protected from './components/Protected.jsx'
import Category from './pages/Category/Category.jsx'
import Home from './pages/Home/Home.jsx'
import ScrollToTop from './components/ScrollToTop.js';
import CategoryPage from './components/CategoryPage/CategoryPage.jsx'
import CategoryCard from './components/CategoryCard/CategoryCard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected><ScrollToTop><Root /></ScrollToTop></Protected>,
    children: [
      {
        path: '/',
        element: <Home />,
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
        path: '/category',
        element: <Category />
      },
      {
        path: '/category/:page',
        element: <CategoryPage />
      },
      {
        path: '/category/:page/:card',
        element: <CategoryCard />
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
