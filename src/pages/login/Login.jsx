import React, { useContext, useState } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/authContext';

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const {usedispatch} = useContext(authContext)

const handleLogin = (e) => {
  e.preventDefault()
                                                //paste the format from firebase docs
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {                 // return back users data
                                            //  after Signed in 
    const user = userCredential.user;
    usedispatch({ type:"LOGIN", payload:user }) // send the payload to global context
    navigate("/")
  })
  .catch((error) => {
    setError(true)
    // ..
  });
}
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password'onChange={(e) => setPassword(e.target.value)}/>
        <button type = "submit" >Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login