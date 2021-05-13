import React,{useState} from 'react'
import { Container, Form,Row,Col, Button, Table, Card } from 'react-bootstrap'
import axios from 'axios'
function LocalCase() {
    const [stateName, setStateName] = useState('')
    const [districtName, setDistrictName] = useState('')
    const [post, setPost] = useState({})
    const [error, setError] = useState('')
    const submitHandler=e=>{
        e.preventDefault()
        console.log(stateName)
        console.log(districtName)
        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                console.log(response.data[stateName]["districtData"][districtName])
                setPost(response.data[stateName]["districtData"][districtName])
            })
            .catch(error=>{
                setPost({})
                setError('Data is Incorrect')
            })
    }
    return (
        <div>
            <Container>
            <h6 className="text-center">LOCAL CASE</h6>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <Form.Control 
                            value={stateName} 
                            placeholder="State Name"  
                            type="text" 
                            onChange={(e)=>setStateName(e.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Control 
                            value={districtName} 
                            placeholder="District Name"
                            type="text"
                            onChange={(e)=>setDistrictName(e.target.value)} />
                    </Col>
                </Row>
                <br/>
                <Button type="Submit" variant="secondary" size="sm" block>Search</Button>
            </Form>
            <br/>

            {post?
                
                <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Confirmed</Card.Header>
                        <Card.Title>{post.confirmed}</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Active</Card.Header>
                        <Card.Title>{post.active}</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Recovered</Card.Header>
                        <Card.Title>{post.recovered}</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Deceased</Card.Header>
                        <Card.Title>{post.deceased}</Card.Title>
                    </Card>
                </Col>
               
                </Row>
                :null}
            
            </Container>
        </div>
    )
}

export default LocalCase
