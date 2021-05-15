import React from 'react';
import { Navbar } from 'react-bootstrap';
import GlobalCase from './components/globalcase/GlobalCase';
import LocalCase from './components/localcase/LocalCase';



function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className="text-center">
          <Navbar.Brand>COVID CASES</Navbar.Brand>
        </Navbar>
        <br/>
        <GlobalCase/>
        <br/>
        <LocalCase/>
        <br/> 
  
    </div>
  );
}

export default App;
