const initialState = {
  list: []
}

export default function jobs(state = initialState, action) {
  switch(action.type) {
    case 'ADD_LIST':
      return state
    default:
      return state
  }
}
