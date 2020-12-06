import { CHANGE_COUNTRY_STATE, GET_COUNTRIES } from '../actiontypes';
import data from '../../static/countries.json';

let initialState = {
    countries: data,
    selectedCountries: {}
};

export function countriesReducer(state = initialState, action) {
  if (action.type === GET_COUNTRIES ) {
    state = action.state.countries;
    return state
  }

  if(action.type === CHANGE_COUNTRY_STATE) {
    let selectedCountries = {...state.selectedCountries}
    let {country, selectedState} = action.state
    if(!selectedCountries[country]){
      selectedCountries[country] = {}
    }
    //if country is present and state is not present
    if(selectedCountries[country] && !selectedCountries[country][selectedState]) {
      selectedCountries[country][selectedState] = true
    } 
    else if(selectedCountries[country] && selectedCountries[country][selectedState]) {
      delete selectedCountries[country][selectedState]
    } 
 
    //country don't have any key
    if(Object.keys(selectedCountries[country]).length === 0) {
      delete selectedCountries[country]
    }
    state.selectedCountries = selectedCountries

    return Object.assign({}, state)
  }
  return state;
}
