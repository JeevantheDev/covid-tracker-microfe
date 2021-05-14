import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Container, Form} from 'react-bootstrap'
function GlobalCase() {
    const [countryName, setcountryName] = useState()
    const [globalData, setglobalData] = useState([])
    useEffect(()=>{
        axios.get('https://api.covid19api.com/summary')
            .then(response=>{
                const result=response.data.Countries 
                const gd=response.data.Global
                console.log(result)
                setcountryName(result)
                // for (let index = 0; index < result.length; index++) {

                //     console.log(result[index])
                //     setcountryName(...countryName,result[index]['Country'])  
                // }
               
                
            })
            .catch(error=>{
                console.log(error)
            })
    },[])
    return (
        <div>
            <Container>
                <h6>GLOBAL CASE</h6>
                {countryName}
                <form>
                <Form.Control as="select">
                    <option>Global</option>
                </Form.Control>
                </form>
                {globalData.TotalConfirmed}
            </Container>
        </div>
    )
}

export default GlobalCase
