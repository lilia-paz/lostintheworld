import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, Table, Button } from 'reactstrap'
import { useAuth0 } from '../react-auth0-spa'
import axios from 'axios'

const SearchResultTable = props => {
  const { user } = useAuth0()

  const handleSave = async (e) => {
    const index = e.target.parentNode.parentNode.getAttribute('label')
    const tobeSaved = props.data[index]
    console.log('data to be saved:', tobeSaved)
    console.log(user.email) 
    const axiosResponse = await axios({
      url: '/favorite',
      method: 'POST',
      data: {
        email: user.email,
        sub: user.sub,
        name: tobeSaved.name,
        title: tobeSaved.title,
        type: tobeSaved.type,
        location: tobeSaved.location
      }
    })
    console.log(axiosResponse.data)
  }

  return (
    <Row className='mb-5'>
      <Col sm={{ size: 10, offset: 1 }}>
        <Card>
          <CardBody>
            <CardTitle>Search Result</CardTitle>
            <Table striped>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Title</td>
                  <td>Type</td>
                  <td>Location</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {(!props.data || props.data.length === 0) && (
                  <tr>
                    <td colSpan='6'>No data found</td>
                  </tr>
                )}
                {props.data &&
                  props.data.length > 0 &&
                  props.data.map((element, index) => (
                    <tr key={index} label={index}>
                      <td>{index + 1}</td>
                      <td>{element.name}</td>
                      <td>{element.title}</td>
                      <td>{element.type}</td>
                      <td>{element.location}</td>
                      <td>
                        <Button onClick={handleSave}>Save</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SearchResultTable
