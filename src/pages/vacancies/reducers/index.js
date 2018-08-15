const initialState = {
  list: [],
  loading: true,
};

export default function vacancies(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_VACANCIES':
    return {
      ...state,
      list: action.payload
    };
  case 'STOP_VACANCIES_LOADING':
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
}

