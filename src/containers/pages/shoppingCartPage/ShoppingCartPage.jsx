import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import './ShoppingCartPage.scss'
import Partner from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'

export class ShoppingCartPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container shopping">
          <div className="shopping-title title-component">
            <p>
              <span>Giỏ hàng của tôi</span>
            </p>
          </div>
          <div className="shopping-icon">
            <div className="item icon-cart active">
              <div className="block">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="block"> Giỏ hàng của tôi</div>
              <div className="block circle">
                <span className="number">1</span>
              </div>
            </div>
            <div className="item icon-pay">
              <div className="block">
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div className="block">Thanh toán</div>
              <div className="block circle">
                <span className="number">2</span>
              </div>
            </div>
            <div className="item icon-finish">
              <div className="block">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="block"> Hoàn tất</div>
              <div className="block circle">
                <span className="number">3</span>
              </div>
            </div>
          </div>
          <div className="item shopping-content">
            <div className="table-product table-responsive">
              <table className="table content-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>TÊN SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>THÀNH TIỀN</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="image">
                      <Link className="link-image" to="#">
                        <img src={'assets/images/sup_ngheu_large.jpg'} alt="" />
                      </Link>
                    </td>
                    <td className="name">
                      <Link to="#"> Xà lách trộn kiểu Nga</Link>
                    </td>
                    <td className="price">59,000đ</td>
                    <td className="quantity">
                      <input type="number" className="" />
                    </td>
                    <td className="total">59,000đ</td>
                    <td className="icon">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-total">
              <div className="total-price">
                <span className="title">Tổng thanh toán:</span>
                <span className="price">59,000đ</span>
              </div>
              <div className="total-pay">
                <button type="button" className="btn btn-dark mr-2 continue">
                  TIẾP TỤC MUA HÀNG
                </button>
                <button type="button" className="btn btn-danger pay">
                  TIẾN HÀNH THANH TOÁN
                </button>
              </div>
            </div>
          </div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default ShoppingCartPage
