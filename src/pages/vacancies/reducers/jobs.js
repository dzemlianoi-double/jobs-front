const initialState = {
  last_vacancies: [
    {
      id: 1,
      title: 'deiver',
      country: 'Ukraine',
      city: 'Dnipro',
      salary_min: 100,
      salary_max: 200,
      age_min: 20,
      age_max: 35
    },
    {
      id:2,
      title: 'deiver',
      country: 'Ukraine',
      city: 'Kiev',
      salary_min: 150,
      salary_max: 220,
      age_min: 14,
      age_max: 65
    },
    {
      id:3,
      title: 'deiver',
      country: 'Ukraine',
      city: 'Zaparozhe',
      salary_min: 150,
      salary_max: 220,
      age_min: 14,
      age_max: 65
    }
  ],
};

export default function jobs(state = initialState, action) {
  switch(action.type) {
  case 'ADD_VACANCIES_LAST':
    return {
      ...state,
      last_vacancies: action.payload
    };
  default:
    return state;
  }
}
