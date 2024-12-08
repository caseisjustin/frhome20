import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LINKS } from '../../static'

const Header = () => {
  const {pathname} = useLocation()
  return (
    <header id='header' className='sticky top-0 left-0 z-10'>
        <nav className={`flex gap-4 p-4  ${pathname === "/about" ? "bg-blue-400" : "bg-slate-300"}`}>
          {
            LINKS?.map((link)=> (
              <NavLink key={link.id} className='text-slate-800 flex items-center gap-1' to={link.path}>
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))
          }
        </nav>
    </header>
  )
}

export default Header