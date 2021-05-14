import React from 'react';
import { Navbar } from 'react-bootstrap';
import GlobalCase from './components/globalcase/GlobalCase';


function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className="text-center">
          <Navbar.Brand>COVID CASES</Navbar.Brand>
        </Navbar>
        <br/>
        <GlobalCase/>
    
    </div>
  );
}

export default App;
