import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CountryListCard from "../containers/CountryListCard";
import SelectedCountriesCard from "../containers/SelectedCountriesCard";
import Nav from "../containers/Nav";
import { connect } from 'react-redux';
import { changeCountrySelectedState, getCountriesList } from "../redux/action";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  onChangeState =(e) => {
    console.log("On change called",e.target.name, e.target.id)
    if(!e.target.name && !e.target.id) {
      return
    }
    this.props.dispatch(changeCountrySelectedState( e.target.name, e.target.id))
  }

  render() {
    return (
      <div className="animated fadeIn bodyBackground" style={{height: "100vh"}}>
        <Nav/>

        {/* Body */}
        <div className="container mt-4" style={{paddingTop: "5%"}}>

          <Row>
            <Col>
              <CountryListCard selectedCountries ={this.props.countriesReducer.selectedCountries} countries={this.props.countriesReducer.countries} onChangeState={this.onChangeState} />
            </Col>
            <Col>
            {Object.keys(this.props.countriesReducer.selectedCountries).length != 0 && <SelectedCountriesCard selectedCountries ={this.props.countriesReducer.selectedCountries} onChangeState={this.onChangeState}/>}
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}

// export default Dashboard;
const mapState = (state) => {
  console.log("map state", state)
  return {
      ...state,
  };
};
export default connect(mapState)(Dashboard);