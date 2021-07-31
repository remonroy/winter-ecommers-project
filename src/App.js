import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from './Component/MainHeader/Home/Home';
import Notfound from './Component/Notfound/Notfound';
import Navbar from './Component/Navbar/Navbar';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import About from './Component/About/About';


function App() {
  // const[loading,setLoading]=useState(false)
  // useEffect(()=>{
  //   loading ? <div className="load"><ClipLoader color={'orange'} loading={loading}  size={80} /></div>:
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },3000)
  // },[])
  return (
    <div className="bg">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
