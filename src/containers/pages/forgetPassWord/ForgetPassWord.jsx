
  
import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarAccount from '../../../components/layout/sidebarAccount/SidebarAccount'

import './ForgetPassWord.scss'
import {
    MenuForgetPassWord,
    InformationConfim,
} from '../../../components/forgetPassWord/index'

export class ForgetPassWord extends Component {
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
                <  MenuForgetPassWord/>
                < InformationConfim />
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ForgetPassWord

