import React from 'react';
import { Navbar } from 'react-bootstrap';
import LocalCase from './components/localcase/LocalCase';


function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className="text-center">
          <Navbar.Brand>COVID CASES</Navbar.Brand>
        </Navbar>
        <br/>
        <LocalCase/>
    
    </div>
  );
}

export default App;
