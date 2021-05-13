import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col, Button } from 'react-bootstrap'
import axios from 'axios'
function LocalCaseOne() {
    const [stateName, setStateName] = useState({})
    const [districtName, setDistrictName] = useState({})
    const [post, setPost] = useState({})
    useEffect(()=>{
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response=>{
            console.log(response.data.length)

            
        })
    })
    {/*const submitHandler=e=>{
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
    }*/}
    return (
        <div>
            <Container>
            <h6>LOCAL CASE</h6>
            <Form>
                <Row>
                    <Col>
                        <Form.Control as="select">
                            <option>Default select</option>
                        </Form.Control>
                    </Col>
                    <Col>
                    <Form.Control as="select">
                            <option>Default select</option>
                        </Form.Control>
                    </Col>
                </Row>
                <br/>
            </Form>
            </Container>
        </div>
    )
}

export default LocalCaseOne
