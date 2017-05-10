import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// Components
import DefaultLayout from './DefaultLayout';
import Home from './components/pages/Home';
import About from './components/pages/About';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={DefaultLayout}>
          <IndexRoute component={Home}/>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    )
  }
}

export default App;
