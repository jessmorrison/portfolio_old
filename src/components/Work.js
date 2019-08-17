import React, { Component } from 'react';
/*import cloud from './img/cloud.jpg';*/
import victory from './img/victory.gif'

class Work extends Component {
  render() {
    return (
        <div>
          <h2>PREVIOUS WORK EXPERIENCE</h2>
          <div class="col-12">
            <img src={victory} alt="victory"/>
            <div class="work__brands">
              VOGUE MAGAZINE
            </div>
            <div class="work__brands">
              WALGREENS
            </div>
            <div class="work__brands">
              HAYMARKET MEDIA
            </div>
            <div class="work__brands">
              CONDUCTOR INC
            </div>
          </div>
        </div>
    );
  }
}

export default Work;
