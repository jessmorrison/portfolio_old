import React, { Component } from 'react';


class Logo extends Component 
{  
  render() {
    return (
        <div>
            {/* <div  class="jm-TT">
                <strong>
                    JM
                </strong>
            </div> */}
            <div class="jm-container-full-screen">
             <div id="jm-logo" class="glitch" data-text="JESS MORRISON">
                 JESS MORRISON
                <div id="jm-title">Front End Developer + Digital Designer</div>
                <div id="update-progress">Update In Progress</div>
             </div>
             <div id="footer-info">
                <div class="footer-info-text">Chicago, IL</div>
                <div class="footer-info-text">2019</div>
             </div>
            </div>  
        </div>
    );
  }
}

export default Logo;