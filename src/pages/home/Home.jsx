import React from 'react'
import './home.scss'
import { Sidebar, Navbar, Widget, Chart, Featured, TableChart } from '../../components'

const Home = () => {
  return (
    <div className='home'>

        <Sidebar/>
        <div className='homeContainer'>

          <Navbar/>
          <div className='widgets'>
            <Widget type='user'/>
            <Widget type='product'/>
            <Widget type='order'/>
            <Widget type='earning'/>

          </div>

          <div className='charts'>
            <Featured/>
            <Chart/>
          </div>
          
          <div className='list-container'>
            <div className="list-title">Latest Transaction</div>
            <TableChart/>
          </div>

        </div>
    </div>
  )
}

export default Home