import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Form, Row,Col,Card,Spinner} from 'react-bootstrap';
import '../common.css';


function GlobalCase() {
    const [countryName, setcountryName] = useState()
    const [currentCase, setCurrentCase] = useState({
        totalConfirmed: 0,
        totalDeath: 0,
        totalRecovered: 0,
    })
    const [globalData, setGlobalData] = useState()
    useEffect(()=>{
        axios.get('https://api.covid19api.com/summary')
            .then(response=>{
                const result=response.data.Countries 
                const gd=response.data.Global
                setGlobalData(gd);
                setCurrentCase({
                    totalConfirmed: gd.TotalConfirmed,
                    totalDeath: gd.TotalDeaths,
                    totalRecovered: gd.TotalRecovered
                });
                setcountryName(result)                
            })
            .catch(error=>{
                console.log(error)
            })
    },[])
    const filterByCountry = (country) => {
        if(country !== 'Global') {
            const filteredCountry = countryName.filter(({Country}) => Country === country);
            setCurrentCase({
                totalConfirmed: filteredCountry[0].TotalConfirmed,
                totalDeath: filteredCountry[0].TotalDeaths,
                totalRecovered: filteredCountry[0].TotalRecovered
            });
        } else {
            setCurrentCase({
                totalConfirmed: globalData.TotalConfirmed,
                totalDeath: globalData.TotalDeaths,
                totalRecovered: globalData.TotalRecovered
            });
        }
    }
    return (
        <div>
                <h1 className="subtitle">GLOBAL CASE</h1>
                <form>
                <Form.Control onChange={(e) => filterByCountry(e.target.value)} as="select">
                    <option value='Global'>Global</option>
                    {countryName && countryName.map(({ID, Country}) => {
                        return (
                            <option  key={ID} value={Country}>{Country}</option>
                        )
                    })}
                </Form.Control>
                </form>
                <br/>
                <Row>
                    <Col className="mb-3"  sm={4}>
                        <Card className="text-center" bsPrefix="confirmCard">
                            <Card.Header><span className="cardheader">Confirmed</span></Card.Header>
                            <Card.Body>
                                <Card.Title><span className="carddata">{currentCase.totalConfirmed > 0 ? currentCase.totalConfirmed : <Spinner animation="border" variant="dark" />}</span></Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-3"  sm={4}>
                        <Card className="text-center" bsPrefix="deathCard">
                            <Card.Header><span className="cardheader">Death</span></Card.Header>
                            <Card.Body>
                                <Card.Title><span className="carddata">{currentCase.totalDeath > 0 ? currentCase.totalDeath : <Spinner animation="border" variant="dark" />}</span></Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-3"  sm={4}>
                        <Card className="text-center" bsPrefix="recoverCard">
                            <Card.Header><span className="cardheader">Recovered</span></Card.Header>
                            <Card.Body>
                                <Card.Title><span className="carddata">{currentCase.totalRecovered > 0 ? currentCase.totalRecovered : <Spinner animation="border" variant="dark" />}</span></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <p className='text-muted'></p>
        </div>
    )
}

export default GlobalCase