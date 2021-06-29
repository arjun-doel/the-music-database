import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './component/Navigation'
import Home from './component/Home'
import Collection from './component/Collection'
import SignIn from './component/SignIn'

const App = () => {



  return (
    <>
      <BrowserRouter>

        <Navigation />

        <Switch>

          <Route path="/signin">
            <SignIn />
          </Route>
          
          <Route path="/index">
            <Collection />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  )
}

export default App