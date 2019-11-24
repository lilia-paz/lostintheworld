import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

const FormInput = props => {
  const [zipcodeValue, setZipcodeValue] = useState()

  const handleChange = event => {
    setZipcodeValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (zipcodeValue) {
      props.handleSubmit(zipcodeValue)
    } else {
      // do something if input is empty but user click submit
    }
  }

  return (
    <Row>
      <Col className='mt-5 mb-5' sm={{ size: 10, offset: 1 }}>
        <Card>
          <CardBody>
            <CardTitle>Find your next favorite artwork</CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label sm={2} for='zipcode'>
                  Zipcode
                </Label>
                <Col sm={8}>
                  <Input
                    type='text'
                    id='zipcode'
                    placeholder='input zipcode'
                    onChange={handleChange}
                    value={zipcodeValue}
                  />
                </Col>
                <Col sm={2}>
                  <Button color='primary' type='submit'>
                    Search
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
export default FormInput
