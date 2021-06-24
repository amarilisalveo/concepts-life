import React from 'react';

import background from "../images/moule-image.jpg";


const ModuleImageText = props => {

    
        return (
    
            <div className = "Module-Image">
            <div  style={{ 
                  backgroundImage: `url(${background})`, 
                  backgroundRepeat: 'no-repeat', 
                 backgroundSize: 'cover' }} className= "Large-image">
            
              </div>
              <div className = "container-text">
              <div className="text-module">
               <h4> Shop anything and everything</h4>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
              </div>
              </div>
            </div>
        
    );
   
}


export default ModuleImageText;
