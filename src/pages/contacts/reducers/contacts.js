const initialState = {
  emails: [],
  phone_numbers: {},
  social_links: {},
  coordinates: {},
  addresses: {},
  loading: true
};

export default function contacts(state = initialState, action) {
  switch(action.type) {
  case 'RECEIVE_NUMBERS':
    return {
      ...state,
      phone_numbers: action.payload
    };
  case 'RECEIVE_EMAILS':
    return {
      ...state,
      emails: action.payload
    };
  case 'RECEIVE_ADDRESSES':
    return {
      ...state,
      addresses: action.payload
    };
  case 'RECEIVE_COORDINATES':
    return {
      ...state,
      map: action.payload
    };
  case 'RECEIVE_SOCIAL_LINKS':
    return {
      ...state,
      social_links: action.payload
    };
  case 'FINISH_LOADING':
    return {
      ...state,
      loading: true
    };
  default:
    return state;
  }
}