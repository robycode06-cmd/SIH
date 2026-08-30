const Navbar = () => {
  return (
    <div className='absolute inset-x-0 top-0 z-50 pointer-events-none'>
      <nav className=" h-15 flex justify-between items-center bg-gradient-to-r from-[#ff3b30] to-[#ff7336] py-2 px-4 text-white font-sans shadow-[0_2px_4px_rgba(0,0,0,0.1)] pointer-events-auto">
        <p className="text-white text-xl">Name of the Organization</p>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center bg-white rounded py-1 px-2 h-8 w-80">
            <input 
              type="text" 
              placeholder="Search for Location" 
              className="border-none outline-none w-full text-xs text-[#333] placeholder-[#888]"
            />
            <button className="bg-transparent border-none cursor-pointer text-[#555] flex items-center p-0" aria-label="Search">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <button className="bg-transparent border-none text-black cursor-pointer flex items-center p-0 hover:opacity-80" aria-label="Information">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}
    
export default Navbar;