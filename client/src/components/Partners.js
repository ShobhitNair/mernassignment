import React from 'react'

const Partners = () => {
  return (
    <div className='mt-20'>
        <div className='absolute  flex-col p-12'>
                <h1 className='text-dark-blue font-bold text-6xl ml-64'>YOUR <span className='italic text-6xl font-medium'>TRUSTED</span> PARTNER IN</h1>
                <h1 className='text-dark-blue font-bold text-6xl ml-72'>THE FUTURE<span className='italic text-6xl font-medium'> OF HOUSING</span></h1>
                <h6 className='text-dark-blue ml-72 p-12'>Our partnerships with governments and local banks ensure that our housing prices are <br></br><span className='ml-36'>affordable enough for our target market.</span></h6>
                <button className='bg-light-blue rounded-3xl border-2 border-light-blue text-white p-2 px-3 ml-96 translate-x-40'>Join Our Community Today➡️</button>
        </div>
        <div className='relative -z-20'>
            <img className='w-full' src='assets\image6.png' alt='image6' />
        </div>
    </div>
  )
}

export default Partners