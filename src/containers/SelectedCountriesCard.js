import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, CustomInput, Form, FormGroup, Label, Col
} from 'reactstrap';

const SelectedCountriesCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody className="pl-4 ml-3 py-1">
                    {
                        Object.entries(props.selectedCountries).map(([key, value]) => {
                            return (
                                <>
                                    <Row className="mt-4">
                                        <Col>
                                            <CardTitle tag="h4">{key}</CardTitle>
                                        </Col>
                                    </Row>

                                    {Object.entries(value).map(ele => {
                                        return (
                                            <Col xs={"12"} className="px-0 py-2">
                                                <Card className="p-2 muted-bg">
                                                    <Row>
                                                        <Col xs={10}>{ele}</Col>
                                                        <Col className="text-center">
                                                            <i class="fa fa-times fa-1x text-muted" id={ele[0]} name="abcd" onClick={() => props.onChangeState({
                                                                target: {
                                                                    id: ele[0],
                                                                    name: key
                                                                }
                                                            }
                                                            )}></i></Col>
                                                    </Row>
                                                </Card>

                                            </Col>
                                        )
                                    })}


                                </>
                            )
                        })
                    }
                </CardBody>
            </Card>
        </div>
    );
};

export default SelectedCountriesCard;