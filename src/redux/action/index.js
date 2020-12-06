import {
    GET_COUNTRIES, CHANGE_COUNTRY_STATE
  } from '../actiontypes';
  import data from '../../static/countries.json';

  export function getCountriesList() {
    return {
        type: GET_COUNTRIES,
        state: data
    }
  }

  export function changeCountrySelectedState(country, state) {
    return {
      type: CHANGE_COUNTRY_STATE,
      state: {
        country, 
        selectedState : state
      }
    }
  }