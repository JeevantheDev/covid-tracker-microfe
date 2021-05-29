import React, {useState} from 'react';
import {Nav } from 'react-bootstrap';
import CovidDataMap from './components/coviddatamap/CovidDataMap';
import GlobalCase from './components/globalcase/GlobalCase';
import LocalCase from './components/localcase/LocalCase';

function App() {
  const [currentPage, setCurrentPage] = useState('GlobalCase')
  return (
    <div className="App">
        <Nav justify variant="tabs">
          <Nav.Item onClick={() => {
            setCurrentPage('GlobalCase')
          }}>
            <Nav.Link eventKey='Globalcase'>GLOBAL CASES</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={()=>{
            setCurrentPage('CovidDataMap')
          }}>
            <Nav.Link eventKey='CovidDataMap'>COVID-DATA MAP</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => {
            setCurrentPage('LocalCase')
          }}>
            <Nav.Link eventKey='Localcase'>LOCAL CASES</Nav.Link>
          </Nav.Item>
        </Nav>
        {currentPage === 'GlobalCase' && <GlobalCase />}
        {currentPage === 'CovidDataMap' && <CovidDataMap />}
        {currentPage === 'LocalCase' && <LocalCase />}  
    </div>
  );
}

export default App;
