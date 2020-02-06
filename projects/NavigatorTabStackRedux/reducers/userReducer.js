const initialState = {
  name: 'tanaka',
  age: 44
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
        const updateState = Object.assign({}, state);
        updateState.name = action.name
        return updateState;
  
    default:
      return state;
  }
}
export default userReducer