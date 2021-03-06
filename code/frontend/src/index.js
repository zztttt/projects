import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Mainlayout/Hello';
import Chart from './Mainlayout/Chart';
import Statistics from './Mainlayout/Statistics';
import Report from './Mainlayout/Report';
import Detail from './Mainlayout/Detail';
import {Route,HashRouter, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render((
	<HashRouter>
      <Switch>
        <Route path="/" component={Hello} exact/>
        <Route path="/Hello" component={Hello} />
        <Route path="/Chart" component={Chart} />
        <Route path="/Statistics" component={Statistics} />
        <Route path="/Report" component={Report} />
        <Route path="/Detail" component={Detail} />
      </Switch>
    </HashRouter>
), document.getElementById('root'));
