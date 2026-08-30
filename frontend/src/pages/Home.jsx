import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden bg-gray-100'>
        <Navbar></Navbar>
        <Map></Map>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Home