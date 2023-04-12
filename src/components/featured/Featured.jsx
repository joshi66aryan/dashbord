import React from 'react'
import './featured.scss'
import { 
  MdMoreVert,
  MdKeyboardArrowDown, 
  MdOutlineKeyboardArrowUp 
} from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'> Total Revenue </h1>
        <MdMoreVert fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className="featuredchart">
          <CircularProgressbar value = { 70 } text = {"70%"} strokeWidth={5}/>
        </div>
        <p className='title'> Total Sales made today</p>
        <p className='amount'> $420 </p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>

        <div className="summary">

          <div className="item">
            <div className="item-title">Target</div>
              <div className="item-result positive">
                <MdOutlineKeyboardArrowUp fontSize='small'/>
                <div className="result-amount">$12.4k</div>
              </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
              <div className="item-result negative">
                <MdKeyboardArrowDown fontSize='small'/>
                <div className="result-amount">$12.4k</div>
              </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
              <div className="item-result positive">
                <MdOutlineKeyboardArrowUp fontSize='small'/>
                <div className="result-amount">$12.4k</div>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default featured