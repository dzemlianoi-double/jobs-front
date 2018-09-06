const initialState = {
  list: [],
  modalService: {},
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
  case 'OPEN_SERVICES_MODAL':
    return {
      ...state,
      modalService: action.payload
    };
  case 'CLOSE_SERVICES_MODAL':
    return {
      ...state,
      modalService: {}
    };
  default:
    return state;
  }
}

