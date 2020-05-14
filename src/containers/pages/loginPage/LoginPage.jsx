
import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './LoginPage.scss'
import {
    SidebarLogin,
    MenuLogin,
    InformationLogin,

} from '../../../components/login/index'
export class LoginPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
               <SidebarLogin/>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <  MenuLogin/>
                < InformationLogin />
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default LoginPage
