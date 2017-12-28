import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DatePicker from './routes/DatePicker';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/datepicker" component={DatePicker}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
