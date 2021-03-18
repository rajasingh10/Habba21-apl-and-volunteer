import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AplRegistrationForm from './Pages/AplRegistraionForm'
import Home from './Pages/Home';
import Mainpage from './Pages/Mainpage';
import { VolunteerRegistration } from './Pages/VolunteerRegistration';
function App() {
  return (
    <Router>
      <Switch>

      <Route
        exact
        path='/home'
        component={Mainpage}
      /> 
      <Route
        exact
        path='/APL-Registration'
        component={Mainpage}
      />
        <Route
        exact
        path='/Volunteer-Registration'
        component={VolunteerRegistration}
      />
       <Route
        exact
        path='/'
        component={Home}
      />


      </Switch>
    </Router>
  );
}

export default App;
