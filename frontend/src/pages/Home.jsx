import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Sidebar from '../components/Sidebar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  const [firePannel, setFirePannel] = useState(false)

  const firePannelRef = useRef(null)

  useGSAP(()=>{
    const mob = window.innerWidth < 768
    if(firePannel ){
      gsap.to(firePannelRef.current,{
        x: 0,
        y: 0,
        opacity : 1
      })
    }else{
      gsap.to(firePannelRef.current,{
        x: mob? 0 : '100%',
        y: mob? '100%' : 0,
        opacity : 0
        
      })
    }
  },[firePannel])



  return (
    <div className='relative w-screen h-screen overflow-hidden bg-gray-100'>
        <Navbar></Navbar>
        <Map setFirePannel={setFirePannel}></Map>
        <div ref={firePannelRef} className='fixed bottom-2 right-2 translate-y-full md:translate-x-full md:top-20 md:right-2 w-95/100 md:w-3/10 '>
          <Sidebar setFirePannel={setFirePannel}></Sidebar>
        </div>
    </div>
  )
}

export default Home