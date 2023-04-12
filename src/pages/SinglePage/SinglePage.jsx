import React from 'react'
import './SinglePage.scss'
import avatar from '../../dummydata/photos/avatar.jpg';
import { Chart, Navbar, Sidebar, TableChart } from '../../components'

const SinglePage = () => {

  return (
    <div className='single'>
      <Sidebar/>
      <div className="singlecontainer">
        <Navbar/>
        <div className='top'>

          <div className='left'>
            <div className='editbutton'>Edit</div>
            <h1 className='title'>Information</h1>

            <div className='item'>

              <img 
                src={avatar}
                alt="user-image" 
                className="itemimg" 
              />

              <div className="details">
                <h1 className="itemtitle">John Doe</h1>

                <div className="detailitem">
                  <span className="itemkey">Email:</span>
                  <span className="itemvalue">johndoe2323@gmail.com</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemvalue">+977 9927969405</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">Address:</span>
                  <span className="itemvalue">Kathmandu, Nepal</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">Country:</span>
                  <span className="itemvalue">Nepal</span>
                </div>

              </div>

            </div>
          </div>
          <Chart /> 
        </div>

        <div className="bottom">
          <h1 className='title'>Last Transaction</h1>
          <TableChart/>
        </div>

      </div>
    </div>
  )
}

export default SinglePage