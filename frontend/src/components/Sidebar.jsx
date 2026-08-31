
const Sidebar = ({setFirePannel}) => {
  

  return (
    <div>
      <div className='bg-white border border-gray-300 rounded-xl p-4 md:h-90 md:p-6 shadow-md'>
        
        <h1 className='text-lg md:text-xl font-semibold text-gray-800 mb-4 pb-3 border-b flex justify-between items-center'>Fire Info Panel
          <div className='w-5 md:w-7 shadow flex justify-center items-center bg-slate-50 rounded-full cursor-pointer hover:bg-slate-100'>
            <img 
              onClick={()=>{
                setFirePannel(false)
              }}
              className='w-6 hidden md:w-5 md:block py-1'
              src="https://www.svgrepo.com/show/486072/system-arrow-right-line.svg" 
              alt="Close" 
            />
            <img
              onClick={()=>{
                setFirePannel(false)
              }}
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