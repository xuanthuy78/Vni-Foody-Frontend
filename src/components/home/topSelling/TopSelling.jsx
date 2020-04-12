import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import './TopSelling.scss'
import CardProduct from './cardProduct/CardProduct'
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
          >
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
          </OwlCarousel>
        </div>
      </section>
    )
  }
}

export default TopSelling
