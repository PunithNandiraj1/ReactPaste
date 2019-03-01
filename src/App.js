import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  constructor(props){
    super(props);
    this.onChangeFileName = this.onChangeFileName.bind(this);
    this.onChangeInputString = this.onChangeInputString.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      file_name : '',
      input_string : ''
    }
  }
  onChangeFileName(e){
    this.setState({
      file_name:e.target.value
    })
  }
  onChangeInputString(e){
    this.setState({
      input_string:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    console.log('The values are ${this.state.file_name}, ${this.state.input_string}')
    this.setState({
      file_name: '',
      input_string: ''
    })
  }
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React Paste</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React Paste</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;