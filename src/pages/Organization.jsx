import React from 'react'
import DisplayComp from '../layouts/DisplayComp'
import { Outlet } from 'react-router-dom'
import CreateOrganization from './CreateOrganization'
const Organization = () => {
  return (
    <div>
        <DisplayComp heading='Organisation' name='organization'  page={<CreateOrganization/>}></DisplayComp>
        <Outlet/>
    </div>
  )
}

export default Organization
