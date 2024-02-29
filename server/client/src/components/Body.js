import React from 'react'
import About from './About'
import Services from './Services'
import Partners from './Partners'
import Features from "./Features"


const Body = () => {
  return (
    <div className='py-12'>
        <div className=' ml-72'>
            <h1 className='text-dark-blue text-6xl'>CONNECTING DREAMS TO REALITY</h1>
            <h1 className='text-light-blue text-6xl ml-60'>YOUR PREMIER</h1>
            <h1 className='text-dark-blue text-6xl ml-16'>REAL ESTATE MARKETPLACE</h1>
            <h6 className='text-dark-blue ml-80 mt-9'>Where every search ends with a home</h6>
            <div className='ml-52 py-10'>
                <button className='bg-light-blue rounded-3xl border-2 border-light-blue text-white p-2 px-3 mr-48'> Find Your Home ➡️</button>
                <button className='bg-light-blue rounded-3xl border-2 border-light-blue text-white p-2 px-3'> List Your Property ➡️</button>
            </div>
        </div>
        <Services/>
        <About/>
        <Features/>
        <Partners/>
    </div>
  )
}

export default Body