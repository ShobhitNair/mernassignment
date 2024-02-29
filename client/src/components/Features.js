import React from "react";

const Features = () => {
  return (
    <div className="bg-slight-gray mt-24">
      <div className="flex py-6">
        <h1 className="mx-auto text-dark-blue text-5xl font-bold">
          WHY CHOOSE XYZ?
        </h1>
      </div>
      <div className="flex justify-evenly">
        <div className="m-8 flex">
          <div class="h-48 relative px-2  ">
            <div class="absolute inset-y-0 left-0 w-px bg-black shadow-top-white opacity-50"></div>
          </div>
          <div className="mt-2">
            <h1 className="text-dark-blue text-5xl">01</h1>
            <h1 className="text-dark-blue font-semibold">SEARCH AND FILTERS</h1>
            <button className="p-2 bg-sky-blue rounded-sm"></button>
            <h6 className="text-dark-blue text-xs py-4">Tailored Searches to meet your <br></br> needs. Find what you’re looking <br></br> for with precision.</h6>
          </div>
        </div>
        <div className="mt-24 flex py-5">
          <div class="h-48 relative px-2 ">
            <div class="absolute inset-y-0 left-0 w-px bg-black shadow-top-white opacity-50"></div>
          </div>
          <div className="mt-2">
            <h1 className="text-dark-blue text-5xl">02</h1>
            <h1 className="text-dark-blue font-semibold">DETAILED LISTING</h1>
            <button className="p-2 bg-sky-blue rounded-sm"></button>
            <h6 className="text-dark-blue text-xs py-4">Every Detail Matters. Sellers can <br></br> list, and buyers can explore <br></br> properties that meet their exact<br></br>specifications.</h6>
          </div>
        </div>
        <div className="mt-52 py-10 flex">
          <div class="h-48 relative px-2 ">
            <div class="absolute inset-y-0 left-0 w-px bg-black shadow-top-white opacity-50"></div>
          </div>
          <div className="mt-2">
            <h1 className="text-dark-blue text-5xl">03</h1>
            <h1 className="text-dark-blue font-semibold">DIRECT MESSAGING</h1>
            <button className="p-2 bg-sky-blue rounded-sm"></button>
            <h6 className="text-dark-blue text-xs py-4">Seamless Communication. <br></br> Connect directly with sellers or <br></br> buyers to ask questions, <br></br>negotiate, and make decisions.</h6>
               
          </div>
        </div>
        <div className="mt-24 flex">
          <div class="h-48 relative px-2 ">
            <div class="absolute inset-y-0 left-0 w-px bg-black shadow-top-white opacity-50"></div>
          </div>
          <div className="mt-2">
            <h1 className="text-dark-blue text-5xl">04</h1>
            <h1 className="text-dark-blue font-semibold">SECURE PAYMENTS</h1>
            <button className="p-2 bg-sky-blue rounded-sm"></button>
            <h6 className="text-dark-blue text-xs py-4">Trust in Every Transaction. Our <br></br> secure payment system ensures<br></br> your peace fo mind.</h6>
              
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
