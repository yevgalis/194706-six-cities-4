import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const rentCount = 312;

ReactDOM.render(
    <React.StrictMode>
      <App rentCount={rentCount} />
    </React.StrictMode>,
    document.querySelector(`#root`)
);
