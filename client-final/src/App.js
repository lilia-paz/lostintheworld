import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

// import ExternalApi from "./components/ExternalApi";
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Search from './components/Search'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Twitter from './components/Twitter'
// import List from './components/List';

var divStyle = {
  backgroundImage: 'url(\'https://www.naturefineartphotos.com/wp-content/uploads/2018/09/2489pano-golden-gate-bridge-bw.jpg\')',
  height: "100vh",
}

function App () {
  return (
    <div style={divStyle}>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/search' component={Search} />
          <PrivateRoute exact path='/favorites' component={Favorites} />
          {/* <Route exact path='/search' component={Search} /> */}
          {/* <Route path='/list' component={List} /> */}
        </Switch>
        <footer> <Twitter /> </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
