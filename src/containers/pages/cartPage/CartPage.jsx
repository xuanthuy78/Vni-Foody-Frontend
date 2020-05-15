import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CartPage.scss'


export class CartPage extends Component {
  render() {
    return (
        <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title ng-binding">Bạn có 2 sản phẩm trong giỏ hàng.</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
            ×
          </button>
        </div>
        <div className="modal-body">
          <table className="table" >
            <thead>
              <tr>
                <th />
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
            <tr className="line-item ng-scope" ng-repeat="item in OrderDetails">
                <td className="item-image">
                <img className="img-top" src={'assets/images/sup_cua_large.jpg'} alt="" />
                </td>
                <td className="item-title">
                  <Link to="/san-pham/sup-ga-kem-sua.html" className="ng-binding">
                    Súp gà kem sữa<br />
    
                  </Link>
                </td>
                <td className="item-quantity">
                  <input type="number" className="text ng-pristine ng-untouched ng-valid" ng-model="item.Quantity" ng-change="updateItemCart(item)" />
                </td>
                <td className="item-price ng-binding">312,000₫</td>
                <td className="item-delete">
                   <Link to="/#">Xóa</Link>
                </td>
              </tr>
              <tr className="line-item ng-scope" ng-repeat="item in OrderDetails">
                <td className="item-image">
                <img className="img-top" src={'assets/images/sup_cua_large.jpg'} alt="" />
                </td>
                <td className="item-title">
                  <Link to="/san-pham/xa-lach-tron-kieu-nga.html" className="ng-binding">
                    Xà lách trộn kiểu Nga<br />
                  </Link>
                </td>
                <td className="item-quantity">
                  <input type="number" className="text ng-pristine ng-untouched ng-valid" ng-model="item.Quantity" ng-change="updateItemCart(item)" />
                </td>
                <td className="item-price ng-binding">118,000₫</td>
                <td className="item-delete">
                    <Link  to="/#">Xóa</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="total-price-modal">
                Tổng cộng : <span className="item-total ng-binding">157,000₫</span>
              </div>
            </div>
          </div>
          <div className="row margin-top-10">
            <div className="col-lg-6">
              <div className="comeback text-left">
                <Link to="/san-pham.html">
                  <i className="fa fa-chevron-circle-left " /> Tiếp tục mua hàng
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right">
              <div className="buttons btn-modal-cart">
                <Link className="btn btn-default" to="/thanh-toan.html">
                  Đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

export default CartPage
