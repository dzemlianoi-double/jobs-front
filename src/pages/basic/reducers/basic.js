const initialState = {
  emails: [],
  phone_numbers: {},
  social_links: {},
  coordinates: {},
  addresses: {},
  last_vacancies: [],
  feedback: [
    {
      'name': 'Ivan',
      'text': 'hello world'
    },
    {
      'name': 'Ivan',
      'text': 'hello world'
    }
  ],
  loading: true
};

export default function basic(state = initialState, action) {
  switch (action.type) {
  case 'ADD_VACANCIES_LAST':
    return {
      ...state,
      last_vacancies: action.payload
    };
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
  case 'RECEIVE_FEEDBACK':
    return {
      ...state,
      feedback: action.payload
    };
  case 'FINISH_LOADING':
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
}

