const authReducer = ( state, action) => {
    switch(action.type){
        case "LOGIN":{
            return{
                currentUser: action.payload,
            }
        }
        case "LOGOUT":{
            return{
                currentUser: null,
            }
        }
        default:
            return state;
    }
}
export default authReducer;



//In the Context API, a reducer is a function that updates the state managed by a context.
// It works similarly to a reducer function in Redux.

//The reducer takes two arguments: the current state and an action object. 
//The action object describes the changes to be made to the state. Based on the action type, 
//the reducer returns a new state object with the updated values.