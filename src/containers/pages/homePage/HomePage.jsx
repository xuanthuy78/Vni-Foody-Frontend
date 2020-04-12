import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './HomePage.scss'
import Banner from '../../../components/home/banner/Banner'
import TopSelling from '../../../components/home/topSelling/TopSelling'
export class HomePage extends Component {
  render() {
    return (
      <MasterLayout>
        <Banner></Banner>
        <TopSelling></TopSelling>
      </MasterLayout>
    )
  }
}

export default HomePage
