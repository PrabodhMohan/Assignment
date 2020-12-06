import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, CustomInput, Form, FormGroup, Label, Col
} from 'reactstrap';

const CountryListCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="pl-4 ml-3 py-1">

          {
            props.countries && props.countries.map(ele=> 
              <>
                <Row className="mt-4">
                  <Col>            
                    <CardTitle tag="h4">{ele.name}</CardTitle>
                  </Col>
                </Row>

                <Row >
                { ele.states.map(state => 
                <>
                <Col xs={"12"} className="pb-3">
                   <CustomInput type="checkbox" className="text-muted" id={state} name={ele.name} label={state} checked={props.selectedCountries && props.selectedCountries[ele.name] && props.selectedCountries[ele.name][state]} onChange={(e) => props.onChangeState(e)} />
                  </Col> 
                </>)}
                </Row>
              </>
            )
          }
        </CardBody>
      </Card>
    </div>
  );
};

export default CountryListCard;