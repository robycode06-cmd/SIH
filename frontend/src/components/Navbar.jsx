import { useState } from "react";

const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className='absolute inset-x-0 top-0 z-50 pointer-events-none'>
      <nav className="h-15 flex justify-between items-center bg-gradient-to-r from-[#ff3b30] to-[#ff7336] py-2 px-4 text-white font-sans shadow-[0_2px_4px_rgba(0,0,0,0.1)] pointer-events-auto">
        {/* Brand Name: Hidden on mobile when search is expanded */}
        <p className={`text-white text-base sm:text-lg md:text-xl font-semibold truncate transition-all duration-200 ${
          isSearchExpanded ? 'hidden sm:block' : 'block'
        }`}>
          Name of the Organization
        </p>

        {/* Right side container / search wrapper */}
        <div className={`flex items-center gap-2 sm:gap-4 ml-auto ${
          isSearchExpanded ? 'w-full sm:w-auto' : 'w-auto'
        }`}>
          
          {/* Mobile Search - Back/Close Button: Only shown on mobile when search is expanded */}
          {isSearchExpanded && (
            <button 
              onClick={() => setIsSearchExpanded(false)}
              className="sm:hidden text-white p-1 hover:bg-black/10 rounded cursor-pointer"
              aria-label="Close search"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}

          {/* Search bar container: shown full-width on mobile when expanded, otherwise shown on sm and up */}
          <div className={`
            bg-white rounded py-1 px-2 h-8 items-center
            ${isSearchExpanded 
              ? 'flex w-full sm:w-64 md:w-80' 
              : 'hidden sm:flex sm:w-64 md:w-80'
            }
          `}>
            <input 
              type="text" 
              placeholder="Search for Location" 
              className="border-none outline-none w-full text-xs text-[#333] placeholder-[#888] bg-transparent"
              autoFocus={isSearchExpanded}
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

          {/* Search Toggle Button: Only shown on mobile when search is NOT expanded */}
          {!isSearchExpanded && (
            <button 
              onClick={() => setIsSearchExpanded(true)}
              className="sm:hidden bg-white/20 hover:bg-white/30 text-white rounded p-1.5 flex items-center justify-center cursor-pointer"
              aria-label="Open search"
            >
              <svg 
                width="18" 
                height="18" 
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
          )}

          {/* Info Button: Hidden on mobile when search is expanded */}
          <button className={`bg-transparent border-none text-black cursor-pointer flex items-center p-0 hover:opacity-80 transition-all ${
            isSearchExpanded ? 'hidden sm:flex' : 'flex'
          }`} aria-label="Information">
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
  );
}

export default Navbar;