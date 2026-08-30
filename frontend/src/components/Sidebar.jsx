import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='fixed top-20 right-4 w-3/10 h-8/10 bg-white border border-gray-300 rounded-xl p-6 shadow-md'>
        
        <h1 className='text-xl font-semibold text-gray-800 mb-4 border-b pb-3 flex justify-between'>Fire Info Panel
          <div className='w-7 shadow flex justify-center items-center bg-slate-50 rounded-full'>
            <img 
            className='w-5'
            src="https://www.svgrepo.com/show/486072/system-arrow-right-line.svg" 
            alt="" 
          />
          </div>
        </h1>
        
        
        <div className='space-y-4'>
          
          <div className='bg-gray-50 p-3 rounded'>
            <h2 className='text-sm font-medium text-gray-600 mb-1'>Fire Type</h2>
            <p className='text-gray-900 font-medium'>Industrial Fire</p>
          </div>
          
          
          <div className='bg-gray-50 p-3 rounded'>
            <h2 className='text-sm font-medium text-gray-600 mb-1'>Risk Type</h2>
            <p className='text-red-600 font-medium'>High</p>
          </div>
          
          
          <div className='bg-gray-50 p-3 rounded'>
            <h2 className='text-sm font-medium text-gray-600 mb-1'>Fire Reading</h2>
            <p className='text-gray-900 font-medium text-lg'>389.2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar