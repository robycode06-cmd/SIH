import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Map></Map>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Home