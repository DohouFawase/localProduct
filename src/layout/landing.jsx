import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navigation/nav'
import Footer from '../components/navigation/footer'

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}
