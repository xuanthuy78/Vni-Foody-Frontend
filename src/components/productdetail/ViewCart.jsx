import React, { Component } from 'react'
import { Modal } from 'antd'
import { Link } from 'react-router-dom'

export class ViewCart extends Component {
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer={null}
          width="80%"
          className="product-view"
        >
          <table className="table">
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
              <tr
                className="line-item ng-scope"
                ng-repeat="item in OrderDetails"
              >
                <td className="item-image">
                  <img
                    className="img-top"
                    src={'assets/images/sup_cua_large.jpg'}
                    alt=""
                  />
                </td>
                <td className="item-title">
                  <Link
                    to="/san-pham/sup-ga-kem-sua.html"
                    className="ng-binding"
                  >
                    Súp gà kem sữa
                    <br />
                  </Link>
                </td>
                <td className="item-quantity">
                  <input
                    type="number"
                    className="text ng-pristine ng-untouched ng-valid"
                    ng-model="item.Quantity"
                    ng-change="updateItemCart(item)"
                  />
                </td>
                <td className="item-price ng-binding">312,000₫</td>
                <td className="item-delete">
                  <Link to="/#">Xóa</Link>
                </td>
              </tr>
              <tr
                className="line-item ng-scope"
                ng-repeat="item in OrderDetails"
              >
                <td className="item-image">
                  <img
                    className="img-top"
                    src={'assets/images/sup_cua_large.jpg'}
                    alt=""
                  />
                </td>
                <td className="item-title">
                  <Link
                    to="/san-pham/xa-lach-tron-kieu-nga.html"
                    className="ng-binding"
                  >
                    Xà lách trộn kiểu Nga
                    <br />
                  </Link>
                </td>
                <td className="item-quantity">
                  <input
                    type="number"
                    className="text ng-pristine ng-untouched ng-valid"
                    ng-model="item.Quantity"
                    ng-change="updateItemCart(item)"
                  />
                </td>
                <td className="item-price ng-binding">118,000₫</td>
                <td className="item-delete">
                  <Link to="/#">Xóa</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

export default ViewCart
