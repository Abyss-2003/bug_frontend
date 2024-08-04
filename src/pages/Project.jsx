import React from 'react'
import { Outlet } from 'react-router-dom'
import DisplayComp from '../layouts/DisplayComp'

const Project = () => {
  return (
    <div>
        <DisplayComp/>
        <Outlet/>
    </div>
  )
}

export default Project
