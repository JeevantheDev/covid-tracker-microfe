import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderCovidTracker = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountCovidTracker = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('CovidTracker-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}