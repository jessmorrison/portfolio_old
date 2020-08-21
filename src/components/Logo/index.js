import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div>
        <div class="jm-container-full-screen">
            <h1>JESS MORRISON</h1>
          {/* <div id="jm-logo" class="glitch" data-text="JESS MORRISON">
            <div>JESS MORRISON</div>
            <div id="jm-title">Front End Developer + Digital Designer</div>
            <div id="update-progress">Update In Progress</div>
          </div> */}
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
