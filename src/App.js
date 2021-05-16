import React from 'react';
import {useRoutes} from 'hookrouter';
import {Nav } from 'react-bootstrap';
import GlobalCase from './components/globalcase/GlobalCase';
import LocalCase from './components/localcase/LocalCase';
const routes = {
  "/globalcase": () => <GlobalCase />,
  "/localcase": () => <LocalCase />,
};
function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link href='globalcase'>GLOBAL CASES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='localcase'>LOCAL CASES</Nav.Link>
          </Nav.Item>
        </Nav>
        {routeResult}
        {/* <Router>
        <Nav justify variant="tabs" defaultActiveKey="/globalcase" className={style.datatab}>
          <Nav.Item className={style.globalcasetab}>
            <Nav.Link to='' activeClassName="is-active">Global Case</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='localcase' activeClassName="is-active">Local Case</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>

          <Route path="/localcase">
            <LocalCase/>
          </Route>
          <Route path="">
              <GlobalCase/>
          </Route> 
        </Switch>
        </Router> */}

  
    </div>
  );
}

export default App;
