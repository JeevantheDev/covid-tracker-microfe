import React,{useState} from 'react'
import { Container, Form,Row,Col, Button, Card } from 'react-bootstrap'
import axios from 'axios'
import style from '../components.module.css'

function LocalCase() {
    const [stateName, setStateName] = useState('')
    const [districtName, setDistrictName] = useState('')
    const [post, setPost] = useState({})
    const submitHandler=e=>{
        e.preventDefault()
        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                console.log(Object.keys(response.data))
                setPost(response.data[stateName]["districtData"][districtName])
            })
            .catch(error=>{
                console.log(error)
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
    
                <Row>
                <Col>
                    <Card className="text-center" bsPrefix={style.confirmCard}>
                        <Card.Header>Confirmed</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.confirmed>0?post.confirmed:"--"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" bsPrefix={style.deathCard}>
                        <Card.Header>Death</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.deceased>0?post.deceased:"--"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" bsPrefix={style.recoverCard}>
                        <Card.Header>Recovered</Card.Header>
                        <Card.Body>
                            <Card.Title>{post.recovered>0?post.recovered:"--"}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            
            </Container>
        </div>
    )
}

export default LocalCase
