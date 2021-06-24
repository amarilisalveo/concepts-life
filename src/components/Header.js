
import React from "react";

import { NavLink } from "react-router-dom";

// class component
class Header extends React.Component {
  render() {
  
    return (
      <header >
 
       <div className="header-left">
        <a id="logo-header" >
			 <img className="logo" src={require('../images/logo.jpg')} alt="logo-concepts"/> 

		</a>   
   
       </div>
    <div className="header-center">
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/Trends">
        trends
      </NavLink>
      <NavLink activeClassName="active" to="/Collections">
        Collections
      </NavLink>
      <NavLink activeClassName="active" to="/TipsGuides">
        tips  guides
      </NavLink>
    </nav>
       
    </div>
     <div className="header-right"><button>Buy now</button></div> 
      
      </header>
      
    );
  }
}
 
export default Header;