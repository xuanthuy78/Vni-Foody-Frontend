import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainItem.scss'

export class MainItem extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
        <div className="card">
          <img
            className="card-img-top"
            src={'assets/images/sup_cua_large.jpg'}
            alt=""
          />
          <div className="card-body">
            <div className="card-name">
              <Link to="#" className="link-product">
                Noddel Tomato
              </Link>
            </div>
            <div className="card-pride">
              <p className="card-text">
                <span className="pro-price">210.000&nbsp;₫</span>
              </p>
            </div>
            <div className="card-cart">
              <div className="cart-button">
                <button className="">Mua hàng</button>
              </div>
              <div className="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainItem
