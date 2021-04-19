import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage.js';
import CustomerLogin from './components/CustomerLogin.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeControl from './components/EmployeeControl';
import PostEmployee from './components/AdminEmployee';
import PostCustomer from './components/AdminCustomer';
import CustomerControl from './components/CustomerControl';
import PostBranch from './components/AdminBranch';
import Transaction from './components/Transaction';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage}/>
        <Route path='/customer/login' exact component = {CustomerLogin} />
        <Route path='/employee/login' exact component = {EmployeeLogin} />
        <Route path='/employee' exact component = {EmployeeControl} />
        <Route path='/admin/employee' exact component = {PostEmployee} />
        <Route path='/admin/customer' exact component = {PostCustomer} />
        <Route path='/admin/branch' exact component = {PostBranch} />
        <Route path='/customer' exact component= {CustomerControl}/>
        <Route path='/customer/transaction' exact component= {Transaction}/>
      </Switch>
    </Router>
  );
}

export default App;
