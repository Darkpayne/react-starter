import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../component/Nav'

const AppLayout = () => {
  return (
    <>
    <Nav/>
    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default AppLayout