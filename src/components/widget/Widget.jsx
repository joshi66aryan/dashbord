import React, { useState, useEffect } from 'react'
import './widget.scss'
import { 
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlinePerson, 
  MdOutlineAccountBalance, 
  MdOutlineShoppingCart, 
  MdOutlineMonetizationOn 
} from "react-icons/md";

const Widget = ({type}) => {

  let data;
  const amount = 100;
  const diff = 100

  switch(type){
    case "user":
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        query: "users",
        icon: (
              <MdOutlinePerson 
                className='icon'
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
      };
      break;

    case "product":
      data = {
        title: 'PRODUCTS',
        link: 'See details',
        query: "products",
        icon: (
              <MdOutlineAccountBalance 
                className='icon'
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
      };
      break;  

    case "order":
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
              <MdOutlineShoppingCart 
                className='icon'
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
      };
      break;

    case "earning":
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earnings',
        icon: (
              <MdOutlineMonetizationOn 
                className='icon'
                style={{ 
                  backgroundColor: "rgba(0, 128, 0, 0.2)", 
                  color: "green"
                }}
              />
            ),
      };
      break;
      
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'> 
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '$'}{amount}</span>
        <span className='link'> {data.link}</span>
      </div>
      <div className='right'> 
        <div className= 'positive'>
          <MdKeyboardArrowUp/> 
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget