const initialState = [{id:123, text:'hello', completed: false}]

// this is the ES2015 syntax for setting a default value for state in the function parameters
function userReducer(state = initialState, action) {
  switch(action.type) {
    // ... 
  }
  return state
}

export default userReducer;