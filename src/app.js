import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Tabbar from "./components/Tabbar";
import ArticleDetail from "./pages/ArticleDetail";
import Member from "./pages/Member";
import './assets/style/app.less';
import './assets/js/rem.js';
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import BaseForm from "./pages/BaseForm";
import BankCard from './pages/BaseForm/BankCard'
// import './assets/style/app.css';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render((
  <HashRouter>
    <div> 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/article-detail" component={ArticleDetail} />
        <Route path="/base-from" component={BaseForm} />
        <Route path="/bank-card" component={BankCard} />
        <Route path="/member" component={Member} />
      </Switch>
      <Tabbar />
    </div>
  </HashRouter>
), document.getElementById('root'));
