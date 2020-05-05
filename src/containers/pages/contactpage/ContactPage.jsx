import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './ContactPage.scss'
import {
    MenuContact,
    SendInformationContact,
    AboutIformationContact,
    AboutSupportContact
}from '../../../components/contact/index'


export class ContactPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="main-content">
         <div className="container">
           <div className="row">
           <MenuContact></MenuContact>
           </div>
           <div className="row">
           <div className="col-md-9 col-sm-12 col-xs-12">
           < AboutIformationContact></ AboutIformationContact>
           <div className="about-sendiformationcontact">
             <SendInformationContact></SendInformationContact>
           </div>
           </div>
           <div className="col-md-3 col-sm-12 col-xs-12">
            <AboutSupportContact> </AboutSupportContact>
           </div>
           </div>
          </div>
        </section>
       
      </MasterLayout>
    )
  }
}

export default ContactPage
