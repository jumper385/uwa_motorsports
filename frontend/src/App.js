import React from 'react';

import { Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Team from './pages/Team'
import Car from './pages/Car'

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/car'>Meet the Car</Link>
            <Link to='/team'>The Team</Link>
            <Link to='/contact'>Contact Us</Link>
          </nav>

          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/team'><Team /></Route>
            <Route path='/car'><Car /></Route>
            <Route path='/contact'><Contact /></Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

const Home = () => {return(<h1>UWA Motor Sports</h1>)}
const Contact = () => {return(<h1>Contact</h1>)}

export default App
