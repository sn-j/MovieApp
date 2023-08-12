import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white sticky top-0'>
      <nav className='container flex justify-between items-center py-4 px-12 '>
        <div className='font-bold'>
          <Link to='/'>Home</Link>
        </div>
        <div className='flex gap-8'>
          <Link to='/category/popular'>Popular</Link>
          <Link to='/category/top_rated'>Top Rated</Link>
          <Link to='/category/upcoming'>Upcoming</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
