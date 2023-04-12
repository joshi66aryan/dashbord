import React from 'react'
import './list.scss'
import { Datatable, Navbar, Sidebar } from '../../components'

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='list-container'>
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List