import { useContext } from 'react'
import './App.css'
import {Home, Login, Add, List, SinglePage} from './pages'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { userInputs,productInputs } from './dummydata/mockData'
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext'
import { authContext } from './context/authContext'

function App() {

  const { darkMode } =  useContext(DarkModeContext)
  const {currentUser} = useContext(authContext)
  
  const RequireAuth  = ({children}) =>{
    return currentUser? (children) : <Navigate to = '/login'/>
  }
  
  return (
    <div className= {darkMode? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

          <Route path='/'>
            <Route path='login' element = {<Login/>}/>
            <Route index element = { 
              <RequireAuth>
                <Home />
              </RequireAuth> } 
            />
          </Route>

          <Route path='users'>
            <Route index element = {
              <RequireAuth>
                <List/>
              </RequireAuth>
            }/>
            <Route path=':userId' element = {
              <RequireAuth>
                <SinglePage/>
              </RequireAuth>
            }/>
            <Route path='new' element = {
              <RequireAuth>
                <Add inputs={userInputs} title="Add New User"/>
              </RequireAuth>

            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
