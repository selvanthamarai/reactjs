import React from 'react';
import './App.css';
import SignUp from './screens/signUp';
import FirstPage from '../src/components/FirstPage/FirstPage'
import Login from '../src/screens/login'
import Dashboard from '../src/dashboard/Dashboard'
import Permission from '../src/components/permission/Permission'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import leaveRequestList from '../src/components/TablePagination/CustomTablePagination'
import errorPage from '../src/components/Error/Error'
import Expenses from './screens/Expenses';

function App() {

  return (
    <Router>
      <div>
        <Route  path="/" exact component={SignUp} />
        <Route  path="/signin"  component={Login} />
        <Route  path="/dashboard"  component={Dashboard} />
        <Route  path="/permission"  exact component={Permission} />
        <Route  path="/leaverequestlist" exact component={leaveRequestList}/>
        <Route path="/expenses" exact component={Expenses}/>

        {/* <Route   component={errorPage}/> */}
      </div>
    </Router>
  );
}

export default App;
