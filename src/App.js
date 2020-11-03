import './App.css';
import Header from './components/Header' 
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from'./components/Home'
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/login'>
            <Header/>
          </Route>
          <Route path='/'>
              <Header/>
              <Home/>
          </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
