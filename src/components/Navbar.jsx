import React from 'react'
import Complogo from '../Assets/Gsynergy Logo V2 Long Description.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <img className='h-10' src={Complogo} />
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
    </div>
  )
}

export default Navbar