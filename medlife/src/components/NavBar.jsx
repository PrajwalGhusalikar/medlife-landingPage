import React from 'react'
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white h-12 w-100% flex justify-between items-center">
        <div className="w-40 text-start pl-5 text-2xl text text-slate-900 bold flex ">
           <img src={logo} alt="logo" className='h-5 w-5'/><span>medlife.ai</span>  </div>
        <div className="w-32 text-center text-2xl text-slate-900 bold">signin</div>
      </nav>
    </div>
  )
}

export default NavBar
