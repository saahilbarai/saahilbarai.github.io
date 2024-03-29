import react from 'react'
import Navbar from './components/Navbar/Navbar'
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Pages/Home';
import Project from './components/Pages/Project';
import AboutMe from './components/Pages/AboutMe';
import Work from './components/Pages/Work'

class App extends react.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render (){
  return <>
          <Router hashType = 'slash'>
            <Navbar />
            <Switch>
              <Route path='/' exact component =
              {Home} />
              <Route path='/Projects' exact component = 
              {Project} />
              <Route path='/About' exact component = 
              {AboutMe} />
              <Route path='/Work' exact component = 
              {Work} />
            </Switch>
          </Router>
        </>
  }
}

export default App