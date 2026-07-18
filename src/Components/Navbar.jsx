import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-auto bg-transparent relative z-50'>
        <nav className='p-8 flex justify-between'>
            <img className='w-12' src="/images/nav-logo.svg" alt="" />
            <img className='w-12 cursor-pointer' src="/images/menu.svg" alt="" />
        </nav>
    </div>
  )
}

export default Navbar
