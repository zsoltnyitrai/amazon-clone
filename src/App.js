import './App.css';
import React,{useEffect} from 'react'
import Header from './components/Header' 
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from'./components/Home'
import Checkout from './components/Checkout';
import Login from './components/Login'
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

function App() {
  const [{user},dispatch]=useStateValue()
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //is logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //logged out
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
    return ()=>{
      //cleanup operation
      unsubscribe()
    }
  },[])
  console.log('user is',user)

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
            <Login/>
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
