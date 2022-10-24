import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center bg-green-50 py-3 text-2xl'>
        <h1>Nav Starter</h1>
        <ul className='flex gap-x-2 mx-4'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    </div>
  )
}

export default Nav