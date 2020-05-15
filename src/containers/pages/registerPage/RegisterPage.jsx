import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarAccount from '../../../components/layout/sidebarAccount/SidebarAccount'

import './RegisterPage.scss'
import {
    InformationUser,
    InformationAccount,
    MenuRegister,
} from '../../../components/register/index'

export class RegisterPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
               < SidebarAccount/>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                < MenuRegister/>
                <  InformationAccount />
                <  InformationUser />
                
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default RegisterPage
