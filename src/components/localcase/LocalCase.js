import React,{useEffect, useState} from 'react'
import { Container, Form,Row,Col, Button, Card } from 'react-bootstrap'
import axios from 'axios'
import style from '../components.module.css'
import { Bar } from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [{   
            gridLines: {
                display: false
            },
        }],
        xAxes: [{
            gridLines: {
                display: false
              }
        }],
    },
    responsive: true,
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 15
                }
            }
        }
    },
  };

function LocalCase() {
    const [currentState, setCurrentState] = useState();
    const [currentDistrict, setCurrentDistrict] = useState();
    const [stateName, setStateName] = useState()
    const [districtName, setDistrictName] = useState()
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                setStateName(Object.keys(response.data))
            })
            .catch(error=>{
                console.log(error)
            })
    }, []);
    useEffect(() => {
        if (currentState) {
            axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                setDistrictName(Object.keys(response.data[currentState].districtData))
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }, [currentState])

    const submitHandler=e=>{
        e.preventDefault()
        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(response=>{
                const {confirmed, deceased, recovered} = response.data[currentState].districtData[currentDistrict]
                setPost({
                    confirmed, deceased, recovered
                })
            })
            .catch(error=>{
                console.log(error)
            })
    } 

    const {confirmed, deceased, recovered} = post;

    return (
        <div>
            <Container>
            <h1 className={style.subtitle}>LOCAL CASE - INDIA</h1>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <Form.Control 
                            as="select" 
                            onChange={(e)=>setCurrentState(e.target.value)}>
                            {stateName && stateName.map((state) => {
                                return (
                                    <option key={state} value={state}>{state}</option>
                                )
                            })}
                            </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control 
                            as="select"
                            onChange={(e)=>setCurrentDistrict(e.target.value)}>
                                {districtName && districtName.map((district) => {
                                return (
                                    <option key={district} value={district}>{district}</option>
                                )
                            })}
                            </Form.Control>
                    </Col>
                </Row>
                <br/>
                <Button type="Submit" variant="secondary" size="sm" block>Search</Button>
            </Form>
            <br/>
    
                <Row>
                <Col>
                    <Card className="text-center" bsPrefix={style.confirmCard}>
                        <Card.Header><span className={style.cardheader}>Confirmed</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className={style.carddata}>{post.confirmed>0?post.confirmed:"--"}</span></Card.Title>
                            {post.confirmed > 0 && <Bar options={options} data={{
                                    labels: ['Covid Confirmed'],
                                    datasets: [
                                      {
                                        label: 'Confirm Case',
                                        data: [confirmed],
                                        backgroundColor: [
                                          '#ff6b6b',
                                        ],
                                        borderColor: [
                                          '#b9e769',
                                        ],
                                        borderWidth: 2,
                                      },
                                    ],
                                }} />}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" bsPrefix={style.deathCard}>
                        <Card.Header><span className={style.cardheader}>Death</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className={style.carddata}>{post.deceased>0?post.deceased:"--"}</span></Card.Title>
                            {post.deceased > 0 && <Bar options={options} data={{
                                    labels: ['Covid Death'],
                                    datasets: [
                                      {
                                        label: 'Death Case',
                                        data: [deceased],
                                        backgroundColor: [
                                          '#b9e769',
                                        ],
                                        borderColor: [
                                          '#ffe66d',
                                        ],
                                        borderWidth: 2,
                                      },
                                    ],
                                }} />}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" bsPrefix={style.recoverCard}>
                        <Card.Header><span className={style.cardheader}>Recovered</span></Card.Header>
                        <Card.Body>
                            <Card.Title><span className={style.carddata}>{post.recovered>0?post.recovered:"--"}</span></Card.Title>
                            {post.recovered > 0 && <Bar options={options} data={{
                                    labels: ['Covid Recovered'],
                                    datasets: [
                                      {
                                        label: 'Recover Case',
                                        data: [recovered],
                                        backgroundColor: [
                                          '#ffe66d',
                                        ],
                                        borderColor: [
                                          '#ff6b6b',
                                        ],
                                        borderWidth: 2,
                                      },
                                    ],
                                }} />}   
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            
            </Container>
        </div>
    )
}

export default LocalCase
