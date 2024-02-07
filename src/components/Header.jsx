import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from '../assets/data'

const Header = () => {
  return (
    <div className='bg-slate-100 flex justify-center items-center gap-4 list-none py-4 overflow-hidden sticky z-auto'>
      {
        NavBar.map(navigate =>
          <NavLink to={navigate.href} className='border-t-2 border-transparent hover:border-t-2 hover:border-black hover:overflow-y-hidden'><li className='overflow-hidden'>{navigate.name}</li></NavLink>)
      }
    </div>
  )
}
export default Header
