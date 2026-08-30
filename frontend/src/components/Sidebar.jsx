import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='fixed bottom-2 right-2 md:top-20 md:right-4 w-95/100 md:w-3/10 max-h-screen md:max-h-[80vh] bg-white border border-gray-300 rounded-xl p-4 md:p-6 shadow-md overflow-y-auto'>
        
        <h1 className='text-lg md:text-xl font-semibold text-gray-800 mb-4 pb-3 border-b flex justify-between items-center'>Fire Info Panel
          <div className='w-5 md:w-7 shadow flex justify-center items-center bg-slate-50 rounded-full cursor-pointer hover:bg-slate-100'>
            <img 
              className='w-6 hidden md:w-5 md:block py-1'
              src="https://www.svgrepo.com/show/486072/system-arrow-right-line.svg" 
              alt="Close" 
            />
            <img
              className='w-5 p-1 md:opacity-0 md:hidden' 
              src="https://cdn-icons-png.flaticon.com/256/32/32195.png" 
              alt="Close" 
            />
          </div>
        </h1>
        
        
        <div className='space-y-3 md:space-y-4'>
          
          <div className='bg-gray-50 p-2.5 md:p-3 rounded'>
            <h2 className='text-xs md:text-sm font-medium text-gray-600 mb-1'>Fire Type</h2>
            <p className='text-gray-900 font-medium text-sm md:text-base'>Industrial Fire</p>
          </div>
          
          
          <div className='bg-gray-50 p-2.5 md:p-3 rounded'>
            <h2 className='text-xs md:text-sm font-medium text-gray-600 mb-1'>Risk Type</h2>
            <p className='text-red-600 font-medium text-sm md:text-base'>High</p>
          </div>
          
          
          <div className='bg-gray-50 p-2.5 md:p-3 rounded'>
            <h2 className='text-xs md:text-sm font-medium text-gray-600 mb-1'>Fire Reading</h2>
            <p className='text-gray-900 font-medium text-lg md:text-xl'>389.2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar