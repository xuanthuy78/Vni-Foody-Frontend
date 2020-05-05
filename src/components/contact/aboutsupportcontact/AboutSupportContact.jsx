import React, { Component } from 'react'

import './AboutSupportContact.scss'

export class AboutSupportContact extends Component {
  render() {
    return (
      <div className="about-support">
        <div className="support-title">
        <h3 className="title">
         SẢN PHẨM HOT
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        </div>
        <div className="information-support">
        <div className="support-hotline">
          <b>HOTLINE</b><br /><b className="ng-binding">0908770095</b>
        </div>
        <div className="support-item ng-scope" ng-repeat="item in SupportOnlines">
          <div className="name">
            Mr.Trường  <b className="ng-binding">0908770095</b>
          </div>
        </div>
      </div>
     </div> 
    )
  }
}

export default AboutSupportContact
