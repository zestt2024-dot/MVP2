import React, { useEffect, useState } from 'react'
import Style from'./Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { Facebook, Menu, Twitter, X } from 'lucide-react'

export default function Navbar() {
    const [isopen, setisopen] = useState(false)
    const closeM = ()=> setisopen(false)
    useEffect(()=>{},[])
  return (
    <>
      <nav className='bg-black fixed top-0 left-0 right-0 z-50 shadow-md h-16 flex items-center mb-5'>

      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link to="/" className='text-white font-bold text-2xl  tracking-tighter'>
            IT-GATE <span>Store</span>
        </Link>

          <div className='hidden md:flex justify-between flex-1 ml-10'>
            
          <ul className='flex items-center'>
            <li className='mx-4 text-white font-medium'><NavLink to={'/'}>Home</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={'/about'}>About</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={'/brands'}>Brands</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={'/cart'}>Cart</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={'/category'}>Category</NavLink></li>
          </ul>


                 <ul className='flex items-center '>
            <li className='mx-4 text-white font-medium'><NavLink to={'/login'}>Login</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={'/register'}>Register</NavLink></li>
            <li className='mx-4 text-white font-medium'><NavLink to={''}>Logout</NavLink></li>
                <li className='flex items-center mx-4'>
                  <Facebook size={20} color="#ffffff" strokeWidth={1.75} />
                  <Twitter size={20} color="#ffffff" strokeWidth={1.75} />
                </li>
        </ul>

        </div>


              <button
              className='text-white md:hidden p-2 hover:bg-sky-500 rounded-lg'
              onClick={()=>{setisopen(true)}}
              >
                <Menu size={30}/>
              </button>
 
      </div>

      </nav >

<div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] shadow-2xl transition-opacity duration-500 ${isopen?'opacity-100 visible':'opacity-0 invisible'} `}>

</div>

      <aside className={`fixed top-0 right-0 h-full w-[280px] z-[70] bg-white ${isopen ?'translate-x-0':'translate-x-full'}`}>
              <div className='p-6 flex justify-between items-center'>
                <span className='text-sky-600 font-bold text-xl'>IT-GATE</span>
               <button onClick={closeM}>
                <X size={28}/>
               </button>
              </div>
              <ul>
                <li className={`transform transition-all duration-500 delay-[100ms] ${isopen?'translate-x-0 opacity-100':'translate-x-10 opacity-0'} `}>
                  <NavLink to={'/'} onClick={closeM} className='text-slate-700 text-lg font-semibold block p-3 hover:bg-sky-50 rounded-xl '>
                    Home
                  </NavLink>
                </li>



                    <li className={`transform transition-all duration-500 delay-[200ms] ${isopen?'translate-x-0 opacity-100':'translate-x-10 opacity-0'} `}>
                  <NavLink to={'/about'} onClick={closeM} className='text-slate-700 text-lg font-semibold block p-3 hover:bg-sky-50 rounded-xl '>
                    About
                  </NavLink>
                </li>


                    <li className={`transform transition-all duration-500 delay-[300ms] ${isopen?'translate-x-0 opacity-100':'translate-x-10 opacity-0'} `}>
                  <NavLink to={'/brands'} onClick={closeM} className='text-slate-700 text-lg font-semibold block p-3 hover:bg-sky-50 rounded-xl '>
                    Brands
                  </NavLink>

                      <li className={`transform transition-all duration-500 delay-[400ms] ${isopen?'translate-x-0 opacity-100':'translate-x-10 opacity-0'} `}>
                  <NavLink to={'/login'} onClick={closeM} className='text-slate-700 text-lg font-semibold block p-3 hover:bg-sky-50 rounded-xl '>
                    login
                  </NavLink>

                      <li className={`transform transition-all duration-500 delay-[500ms] ${isopen?'translate-x-0 opacity-100':'translate-x-10 opacity-0'} `}>
                  <NavLink  to={'/register'} onClick={closeM} className='text-slate-700 text-lg font-semibold block p-3 hover:bg-sky-50 rounded-xl '>
                    Register
                  </NavLink>
                </li>
                </li>
                </li>
              </ul>
      </aside>
    </>
  )
}
