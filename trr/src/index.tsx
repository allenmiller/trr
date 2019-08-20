import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
import Second from './Second';

import createStore  from './store'

ReactDOM.render(
    <Provider store={createStore()}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                 <Route exact path="/second" component={Second} />
          </Switch>
        </Router>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
