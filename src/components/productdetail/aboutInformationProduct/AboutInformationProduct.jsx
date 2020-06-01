import React, { Component } from 'react'
import './AboutInformationProduct.scss'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'

export class AboutInformationProduct extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div className="information-product">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="product-image">
              <img
                className="img-top"
                src={'assets/images/sup_cua_large.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="information-title">
              <h2 className="title">Xà lách trộn kiểu Nga</h2>
            </div>
            <div className="price-product">
              <span className="price-new">59,000đ</span>
            </div>
            <div className="code-product">
              <span>Mã SP: </span>
            </div>
            <div className="description">
              <p>
                Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.
              </p>
            </div>
            <div className="social-medial">
              <div className="like">
                <div className="like-button">
                  <button>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{' '}
                    Like 4
                  </button>
                </div>
              </div>
              <div className="share">
                <div className="share-button">
                  <button>Share</button>
                </div>
              </div>
              <div className="right-button">
                <div className="plus">
                  <button>
                    <i className="fa fa-plus-square" aria-hidden="true"></i>{' '}
                    chia sẻ
                  </button>
                </div>
                <div className="number">
                  <button>2</button>
                </div>
              </div>
            </div>
            <div className="quantity">
              <label className="quantity-product">Số lượng</label>
              <div className="quantity-input">
                <input type="number" defaultValue={1} />
              </div>
            </div>
            <div className="button-card">
              <Link to="#" className="btn btn-dark" onClick={this.showModal}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Thêm
                giỏ hàng
              </Link>
              <Modal
                title=" Bạn có 2 sản phẩm trong giỏ hàng."
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width="60%"
              >
                <div className="modal-body">
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
                            width="100px"
                            height="50px"
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
                    </tbody>
                  </table>
                </div>
              </Modal>
              <Link to="#" className="btn btn-danger">
                <i className="fa fa-check" aria-hidden="true"></i> Mua ngay
              </Link>
            </div>
            <div className="call">
              <p className="title">
                Để lại số điện thoại, chúng tôi sẽ tư vấn ngay sau từ 5 › 10
                phút
              </p>
              <div className="input">
                <div className="input-group">
                  <input className="form-control" type="text" />
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button">
                      <i className="fa fa-phone" /> Gọi lại cho tôi
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutInformationProduct
