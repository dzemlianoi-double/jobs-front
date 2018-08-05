const initialState = {
  numbers: ["+380630000000"],
  emails: ["test@test.com"],
  addresses: [{
    country: "Ukrain",
    city: "Dnepr",
    address: "Moskovskay"
  }],
  map: [{
    citrate:"48.4551618",
    longitude:"35.0367987"
  }],
  social_links: [{
    facebook: "https://www.facebook.com/"
  }]
};

export default function contacts(state = initialState, action) {
  switch(action.type) {
    case 'RECEIVE_NUMBERS':
      return {
        ...state,
        numbers: action.data.numbers
      };
    case 'RECEIVE_EMAILS':
      return {
        ...state,
        emails: action.data.emails
      }
    case 'RECEIVE_ADDRESSES':
      return {
        ...state,
        addresses: action.data.addresses
      }
    case 'RECEIVE_MAP':
      return {
        ...state,
        map: action.data.map
      }
    case 'RECEIVE_SOCIAL_LINKS':
      return {
        ...state,
        social_links: action.data.social_links
      }
    default:
      return state;
  }
}
