import React from 'react';
import { Navbar } from 'react-bootstrap';
import LocalCase from './components/localcase/LocalCase';
import LocalCaseOne from './components/localcase/LocalCaseOne';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className="text-center">
          <Navbar.Brand>COVID CASES</Navbar.Brand>
        </Navbar>
        <br/>
        <LocalCase/>
        {/* <LocalCaseOne/> */}
    </div>
  );
}

export default App;
