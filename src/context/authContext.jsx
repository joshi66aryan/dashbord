import { createContext, useEffect, useReducer } from "react"
import authReducer from "./authReducer"

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null ,
}

export const authContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, usedispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.currentUser))
      }, [state.currentUser])

    return (
        <authContext.Provider value={{currentUser:state.currentUser, usedispatch}}>
            {children}
        </authContext.Provider>
    );
}
//The Context API consists of two main parts: a Provider component and a Consumer component. 
//The Provider component is responsible for defining the data that needs to be shared and 
//making it available to all of the components in the tree. The Consumer component is used 
//by components that need to access the shared data.

//To use the Context API, you would first create a context object using the createContext() method. 
//This context object is then passed as a prop to the Provider component. The Provider component wraps 
//the entire component tree that needs access to the shared data.

//Then, any component in the tree can use the useContext() hook to access the shared data. 
//The useContext() hook takes the context object as an argument and returns the current value of the shared data.

//Overall, the Context API is a powerful tool that simplifies the process of passing data between components in a React application.


