import React from 'react';
import ReactDOM from 'react-dom';
import Trends from './Trends';
import Collections from './Collections';
import Home from './Home';
import Header from "./Header";
import Footer from "./footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TipsGuides from './TipsGuides';


function routing() {
    
return(
    <Router>
      
      <div>
     
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Trends" component={Trends} />
          <Route path="/Collections" component={Collections} />
          <Route path="/TipsGuides" component={TipsGuides} /> 
      
        </Switch> 
        <Footer />
      
      </div>
     
    </Router> 
  
  );
}

  export default routing;
  
