import React,{useContext} from 'react'
import './Navbar.scss'
import { 
  MdOutlineSearch, 
  MdOutlineLanguage, 
  MdOutlineDarkMode, 
  MdOutlineFullscreenExit, 
  MdOutlineNotificationsNone, 
  MdOutlineChatBubbleOutline,
  MdOutlineList
} from "react-icons/md";
import avatar from '../../dummydata/photos/avatar.jpg'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {
  const { dispatch } =  useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className='wrapper'>

        <div className='search'>
          <input type ='text' placeholder='Search...'/>
          <MdOutlineSearch/>
        </div>

        <div className='items'>

          <div className='item'>
            <MdOutlineLanguage className='icon'/>
            English
          </div>

          <div className='item'>
            <MdOutlineDarkMode 
              className='icon'
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className='item'><MdOutlineFullscreenExit className='icon'/></div>

          <div className='item'>
            <MdOutlineNotificationsNone className='icon'/>
            <div className='counter'>1</div>
          </div>

          <div className='item'>
            <MdOutlineChatBubbleOutline className='icon'/>
            <div className='counter'>88</div>
          </div>
          <div className='item'><MdOutlineList className='icon'/></div>

          <div className='item'>
            <img
              src = {avatar}
              alt =''
              className='avatar'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar