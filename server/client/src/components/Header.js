import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-4 px- ml-4'>
        <div className='flex justify-between mt-3 ml-3'>
            <h1 className='font-bold text-3xl text-dark-blue mr-2'>XYZ </h1>
            <h1 className='font-thin text-3xl text-dark-blue'>INDUSTRIES</h1>
        </div>
        <div className='bg-dark-blue flex rounded-3xl mt-1 py-4 px-11'>
            <h1 className='text-gray px-2'>Home</h1>
            <h1 className='text-gray px-2'>About Us</h1>
            <h1 className='text-gray px-2'>Property</h1>
            <h1 className='text-gray px-2'>Services</h1>
            <h1 className='text-gray px-2'>Contact</h1>
        </div>
        <div className='mr-11 mt-3'>
            <button className='text-dark-blue py-2 px-3 border-2 border-dark-blue rounded-3xl mr-2'>Sign Up</button>
            <button className='bg-light-blue rounded-3xl border-2 border-light-blue text-white py-2 px-3'>Sign In</button>
        </div>
    </div>
  )
}

export default Header