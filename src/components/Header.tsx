import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='flex justify-between px-4 h-[80px] bg-darkBlue items-center md:px-10'>
        <h1 className='text-3xl font-bold text-white'> Football odds </h1>
        <nav>
            <ul className='text-white'>
                <li><Link to='/'>Apuesta del dia</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header