import React from 'react';
import '../css/blurb.css';
import background from "../images/Hope.jpg";


const Blurb = props => {

    
        return (
    
            <div className = "Blurb">


                 <div className= "Blurb-Wrapper">
               <div  style={{  backgroundImage: `url(${background})`,  backgroundRepeat: 'no-repeat' }} className= "Blurb-image">
         
              </div>
              <div className = "container-text-blurb">
              <div className="text-module-blurb">
               <h5> Learn more About</h5>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              </div>
              </div>

              <div className= "Blurb-Wrapper">
              <div  style={{  backgroundImage: `url(${background})`,  backgroundRepeat: 'no-repeat' }} className= "Blurb-image">
            
            </div>
            <div className = "container-text-blurb">
            <div className="text-module-blurb">
             <h5> Learn More About </h5>
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            </div>

            </div>

            <div className= "Blurb-Wrapper">
            <div  style={{  backgroundImage: `url(${background})`,  backgroundRepeat: 'no-repeat' }} className= "Blurb-image">
            
            </div>
            <div className = "container-text-blurb">
            <div className="text-module-blurb">
             <h5> Learn More  About </h5>
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            </div>
            </div>
            </div>
    );
   
}


export default Blurb;
