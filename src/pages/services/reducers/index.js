const initialState = {
  list: [],
  loading: true
};


export default function services(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_SERVICES':
    return {
      ...state,
      list: action.payload
    };
  case 'STOP_SERVICES_LOADING':
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
}

