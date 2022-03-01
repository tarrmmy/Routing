import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'

const index = () => {
  return (
   <Switch>
     <Route path='/' component={SignIn} />
     <Route path='/' component={SignUp} />
   </Switch>
  )
}

export default index