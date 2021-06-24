import React from 'react';
import ReactDOM from 'react-dom';
import Trends from './components/Trends';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import Footer from "./components/footer";
import ModuleText from './components/ModuleText';
import ModuleImageText from './components/ModuleImageText'
import Blurb from './components/Blurb'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Collections from './components/Collections';
import TipsGuides from './components/TipsGuides';
const routing = (
    <Router>
      <div>
        <Header />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Trends" component={Trends} />
          <Route path="/Collections" component={Collections} />
          <Route path="/TipsGuides" component={TipsGuides} /> 
      
        </Switch> 
        <ModuleImageText/>
        <Blurb/>
        <ModuleText/>
        <Footer />
      </div>
    </Router>
  );
  
ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
