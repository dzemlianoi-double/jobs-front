import _ from 'lodash';

const initialState = {
  list: [],
  loading: true,
  filters: {
    default: {
      salary_min: null,
      salary_max: null,
      age_min: null,
      age_max: null,
      speciality: null,
      country: null,
      sex: null,
      experience_max: null
    },
    used: {
      salary_min: null,
      salary_max: null,
      age_min: null,
      age_max: null,
      speciality: null,
      country: null,
      sex: null,
      experience: null
    }
  }
};


export default function vacancies(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_VACANCIES':
    return {
      ...state,
      list: action.payload
    };
  case 'SET_BASE_FILTERS':
    return {
      ...state,
      filters: { 
        ...state.filters,
        default: {
          ...state.filters.default,
          salary_min: _.minBy(action.payload, 'salary_min').salary_min,
          salary_max: _.maxBy(action.payload, 'salary_min').salary_min,
          age_min: _.minBy(action.payload, 'age_min').age_min,
          age_max: _.maxBy(action.payload, 'age_max').age_max,
          experience_max: _.maxBy(action.payload, 'experience').experience
        }
      }
    };
  case 'UPDATE_FILTERS':
    return {
      ...state,
      filters: { 
        ...state.filters, 
        used: {
          ...state.filters.used,
          ...action.payload
        }
      }
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

