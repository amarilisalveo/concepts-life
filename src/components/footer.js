import React from "react";

// function component
const Footer = props => {
  return (
    <footer >
     
        <div className="footer-distributed">

            <div className= "container-footer-left">

           < div className="f-links" >
           <p className="footer-links">
            <a href="/" className="link-1">trends</a>
            
            <a href="/Especies">collections</a>
        
            <a href="/Cuarentena">tips guides</a>
        
            <a href="/Fallecidas">find a store</a>
                  
        </p>
     </div>


        <div className = "container-left">
     

    <div className="footer-left">
    <i className="fa fa-phone"></i>
            <p> tel:+(507)314-7709 </p>
            <i className="fa fa-phone"></i>
            <p> fax:+(507)314-7709 </p>
    <p><a className="mail-footer" href="mailto:support@company.com"> info@tiendaconceptlife.com</a></p>
    <img className="logo-footer" src={require('../images/logo-footer.jpg')} alt="logo-footer"/>

        <p className="footer-company-name"> All rights reserved 2017 Tienda Concepts Life</p>
    </div>


    <div className="footer-center">
        <div className="container-footer-center">
      
            <p><span> Av. Republica de Brazil 303</span> </p>
   
            <p> Panamá </p>
    
            <p> Panamá</p>
            
        </div>
        </div>
     </div>

        </div>

    <div className="footer-right">
        
    <div className="footer-right-container"> 

 
    <p>
     follow us
    </p>
    <div className="footer-icons">
 
<a href="https://www.facebook.com/evaccfoundation/" target="_blank" rel="noopener noreferrer">

<img src={require('../images/icons/icon-facebook.png')} height="39" width="39" alt="icon-fb"/>
</a>
<a href="https://www.instagram.com/evaccfoundation/" target="_blank" rel="noopener noreferrer">    
<img src={require('../images/icons/icon-instagram.png')} height="39" width="39" alt="icon-fb"/></a>
<a href="https://twitter.com/EvaccFoundation" target="_blank" rel="noopener noreferrer">    
<img src={require('../images/icons/icon-twitter.png')} height="39" width="39" alt="icon-fb"/></a>

</div>
</div>

        <p className="footer-company-about">
      
            Created by Nessim Bless and Michael del Muro
        </p>

    

    </div>
    
    </div>
	</footer>
  );
};
 
export default Footer;