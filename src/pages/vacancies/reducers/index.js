import _ from 'lodash';

const initialState = {
  list: [],
  order: null,
  currentVacancy: {},
  loading: true,
  modalVacancy: {},
  filters: {
    default: {
      salary_min: null,
      salary_max: null,
      age_min: null,
      age_max: null,
      specialities_list: [],
      country_list: [],
      experience_max: null
    },
    used: {
      search: '',
      salary_min: null,
      salary_max: null,
      age_min: null,
      age_max: null,
      specialities_list: [],
      country_name: null,
      sex_list: [],
      experience: null
    }
  }
};


export default function vacancies(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_VACANCIES':
    return {
      ...state, list: action.payload
    };
  case 'RECEIVE_VACANCY':
    return {
      ...state, currentVacancy: action.payload
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
          experience_max: _.maxBy(action.payload, 'experience').experience,
          country_list: _.uniqBy(_.map(action.payload, (vacancy) => ({ value: vacancy.country_name, label: vacancy.country_name })), 'label'),
          specialities_list: _.uniqBy(_.flatten(_.map(action.payload, (vacancy) => {
            return _.map(vacancy.specialities, (speciality) => ({ value: speciality.title, label: speciality.title }));
          })), 'label')
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

  case 'RESET_ALL_FILTERS':
    return {
      ...state,
      filters: {
        ...state.filters,
        used: initialState.filters.used
      }
    };  
  case 'CUSTOM_SEARCH':
    return {
      ...state,
      filters: {
        ...state.filters,
        used: {
          ...state.filters.used,
          search: action.payload
        }
      }
    };
  case 'RESET_SEARCH':
    return {
      ...state,
      filters: {
        ...state.filters,
        used: {
          ...state.filters.used,
          search: ''
        }
      }
    };
  case 'STOP_VACANCIES_LOADING':
    return {
      ...state, loading: false
    };
  case 'CHANGE_ORDER':
    return {
      ...state, order: action.payload
    };
  case 'OPEN_VACANCY_MODAL':
    return {
      ...state, modalVacancy: action.payload
    };
  case 'CLOSE_VACANCY_MODAL':
    return {
      ...state, modalVacancy: {}
    };
  default:
    return state;
  }
}

