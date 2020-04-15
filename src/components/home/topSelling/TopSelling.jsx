import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import './TopSelling.scss'
import { CardProducts } from '../index'

export class TopSelling extends Component {
  render() {
    return (
      <section className="top-selling">
        <div className="container">
          <OwlCarousel
            items={5}
            className="owl-theme"
            loop
            nav
            margin={8}
            autoplay
            navText={[
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ]}
          >
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
          </OwlCarousel>
        </div>
      </section>
    )
  }
}

export default TopSelling
