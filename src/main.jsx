import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/home.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path:"/", element : <HomePage />},
     {path:"about", element : <About />},

  ]
}])
createRoot(document.getElementById('root')).render( 
    <RouterProvider router={router}/>   
)
