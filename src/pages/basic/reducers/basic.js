const initialState = {
  emails: [],
  phone_numbers: {},
  social_links: {},
  coordinates: {},
  addresses: {},
  last_vacancies: [],
  feedback: [
    {
      'first_name': 'Yessenia',
      'last_name': 'Lebsack',
      'avatar_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ehsandiary/128.jpg',
      'text': 'Dolorem voluptatem dolore et delectus optio hic recusandae qui sed.'
    },
    {
      'first_name': 'Lavon',
      'last_name': 'Block',
      'avatar_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/sachingawas/128.jpg',
      'text': 'Fugit aspernatur voluptatem dolor consectetur autem laudantium in.'
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

