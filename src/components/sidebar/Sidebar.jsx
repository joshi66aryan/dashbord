import React,  { useContext, useEffect, useState }  from 'react'
import './Sidebar.scss'
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext'

import { 
  MdDashboard, 
  MdOutlinePerson, 
  MdLocalShipping, 
  MdCreditCard, 
  MdStore, 
  MdInsertChart, 
  MdSettingsApplications, 
  MdExitToApp, 
  MdNotificationsNone, 
  MdOutlineSettingsSystemDaydream,
  MdOutlinePsychology,
  MdOutlineAccountCircle 
} from "react-icons/md";
import { authContext } from '../../context/authContext';

import { collection, query, where, getDocs} from "firebase/firestore"
import { db, auth } from "../../firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const { dispatch } =  useContext(DarkModeContext)
  const { currentUser, usedispatch } = useContext(authContext)
  const [name, setName] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "users"), where("email", "==", currentUser.email));
      const data = await getDocs(q);
      data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setName( doc.data().displayName)
      });
    }
    fetchData()
  }, [])

  const onSignOut = () => {
    console.log('click')
    signOut(auth).then(() => {
      // Sign-out successful.
      usedispatch({ type:"LOGOUT" })
      navigate('/login')
    }).catch((error) => {
      console.log(error)
    });
  }
  
  return (
    <div className='sidebar'>

      <div className='top'>
        <Link to="/" style={{textDecoration: "none"}}>        
          <span className='logo'>{name}</span>
        </Link>

      </div>
      <hr/>

      <div className='center'>
        <ul>

          <p className='title'> MAIN </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdDashboard className='icon'/> 
              <span>Dashbord</span> 
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlinePerson className='icon'/>
              <span>Users</span>
            </li>
          </Link>
            <li>
              <MdStore className='icon'/>
              <span>Products</span>
            </li>
          <li>
            <MdCreditCard className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <MdLocalShipping className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <MdInsertChart className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <MdNotificationsNone className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <MdOutlineSettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <MdOutlinePsychology className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <MdSettingsApplications className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <MdOutlineAccountCircle className="icon" />
            <span>Profile</span>
          </li>

          <li onClick = {onSignOut}>
            <MdExitToApp className="icon" />
            <span>Logout</span>
          </li>

        </ul>
      </div>

      <div className='bottom'>
        <div className='coloroptions' onClick={() => dispatch({ type: "LIGHT" })}> </div>
        <div className='coloroptions'onClick={() => dispatch({ type: "DARK" })}> </div>
      </div>

    </div>
  )
}

export default Sidebar