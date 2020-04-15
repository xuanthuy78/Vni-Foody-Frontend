import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './HomePage.scss'
import {
  Banner,
  TopSelling,
  SidebarMain,
  MainProduct,
} from '../../../components/home/index'

export class HomePage extends Component {
  render() {
    return (
      <MasterLayout>
        <Banner></Banner>
        <TopSelling></TopSelling>
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <SidebarMain />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <MainProduct />
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default HomePage
