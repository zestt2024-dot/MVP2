import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Layout from './components/Layout/Layout'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'
import Category from './components/Category/Category'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  let x = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'brands',element:<Brands/>},
      {path:'cart',element:<Cart/>},
      {path:'category',element:<Category/>},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      {path:'*',element:<NotFound/>},

    ]}
    
  ])

  return <RouterProvider router={x}></RouterProvider>
}

export default App
