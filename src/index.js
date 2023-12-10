import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Misc from './pages/Misc'
import Error from './pages/Error'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/misc',
        element: <Misc />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="fixed z-0 bg-stone-100 w-screen h-screen"></div>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
