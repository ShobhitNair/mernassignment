import React from 'react'

const About = () => {
  return (
    <div className='mt-32'>
        <div className='flex flex-col'>
            <h1 className='text-dark-blue text-5xl font-bold mx-auto'>HOW IT WORKS?</h1>
            <h6 className='text-dark-blue mx-auto p-4'>Step by Step Guide</h6>
        </div>
        <div className='flex ml-72 p-4 '>
            <div className=''>
                <img className='w-52 rounded-xl'  src='assets\image2.png' alt='image2'/>
            </div>
            <div className=' mt-7 px-36'>
                <h1 className='text-dark-blue text-3xl font-medium font-bold'>Discover Your Perfect Home</h1>
                <h6 className='text-xs text-dark-blue py-2'>Use our advanced filters to narrow down your search. Specify <br></br>everything from location to amenities, ensuring you find the<br></br> property that feels right.</h6>
                <span className='underline text-dark-blue'>Learn More</span>
            </div>
        </div>
        <div className='flex ml-72 p-4 '>
            <div className=' mt-7 px-36'>
                <h1 className='text-dark-blue text-3xl font-medium font-bold'>Showcase Your Property</h1>
                <h6 className='text-xs text-dark-blue py-2'>List your property with ease. Fill in detailed forms to highlight every <br></br>feature, attracting the perfect buyer directly.
</h6>
                <span className='underline text-dark-blue'>Learn More</span>
            </div>
            <div className=''>
                <img className='w-52 rounded-xl'  src='assets\image3.png' alt='image2'/>
            </div>
        </div>
        <div className='flex ml-72 p-4 '>
            <div className=''>
                <img className='w-52 rounded-xl'  src='assets\image4.png' alt='image4'/>
            </div>
            <div className=' mt-7 px-36'>
                <h1 className='text-dark-blue text-3xl font-medium font-bold'>Connect and Communicate</h1>
                <h6 className='text-xs text-dark-blue py-2'>Our platform facilitates direct communication between buyer and <br></br>seller, making negotiations transparent and straightforward.</h6>
                <span className='underline text-dark-blue'>Learn More</span>
            </div>
        </div>
        <div className='flex ml-80 p-4 '>
            <div className=' mt-7 px-36'>
                <h1 className='text-dark-blue text-3xl font-medium font-bold'>Seal the Deal Securely</h1>
                <h6 className='text-xs text-dark-blue py-2'>Advance payments made safe. Secure your agreement with<br></br>confidence, and step closer to your dream property.</h6>
                <span className='underline text-dark-blue'>Learn More</span>
            </div>
            <div className=''>
                <img className='w-52 rounded-xl'  src='assets\image5.png' alt='image2'/>
            </div>
        </div>
    </div>
  )
}

export default About