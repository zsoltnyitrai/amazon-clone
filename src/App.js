import './App.css';
import Header from './components/Header' 
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from'./components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
          <Header/>
              checkout
          </Route>
          <Route path='/login'>
              loign
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
