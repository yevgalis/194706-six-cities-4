import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import Property from '../propperty/property.jsx';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route path="/login" component={componentName} /> */}
      {/* <Route path="/favorites" component={componentName} /> */}
      <Route path="/offer/:id" component={Property} />
    </Switch>
  );
};

export default App;
