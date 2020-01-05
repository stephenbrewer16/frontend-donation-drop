import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Signup from './Components/signup'
import login_page from './Components/login_page'
import profile_page from './Components/profile_page'
import Main from './Containers/Main'

export default class App extends Component {
  state = {
    
  }

  componentDidMount = () => {
    
  }


  render() {
    return (
      <div>
        <Switch>
            <div>
              <Route/>
            </div>
        </Switch>
      </div>
    )
  }
}