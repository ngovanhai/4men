import React, { Suspense } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Redirect, Route, Router, Switch, withRouter } from 'react-router-dom';
import './App.css';
import './scss/style.scss';

import Headers from './component/Header';
import NotFound from './component/NotFound';
import Footer from 'component/Footer';
import Empty from 'component/Empty';
import SelectProduct from 'features/Products/pages/Item';
import Payment from 'features/Products/pages/Payment';
import Thelayout from 'features/Admin/page/Containers/Thelayout';


const Products = React.lazy(() => import('./features/Products/pages/MainPage'));
const Login = React.lazy(() => import('./features/Login'));
const Admin = React.lazy(() => import('./features/Admin'));
const Category = React.lazy(() => import('./features/Products/pages/Category'));

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Empty}></Route>
          <Route exact path='/admin/' component={Empty}></Route>\
          <Route exact path='/admin/product' component={Empty}></Route>
          <Route exact path='/admin/oder' component={Empty}></Route>
          <Route exact path='/admin/product' component={Empty}></Route>
          <Route exact path='/admin/dashboard' component={Empty}></Route>
          <Route exact path='' component={Headers}></Route>
        </Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/category/:category' component={Category} />
            <Route exact path='/4MEN/:productId' component={SelectProduct}></Route>
            <Route exact path='/thanh-toan' component={Payment} />
            <Route exact path='/login' component={Login} ></Route>
            <Route path="/admin" name="Home" render={props => <Thelayout {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Switch>
          <Route exact path='/login' component={Empty}></Route>
          <Route exact path='/admin/' component={Empty}></Route>
          <Route exact path='' component={Footer}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
