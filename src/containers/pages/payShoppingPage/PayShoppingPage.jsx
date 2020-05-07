import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import ShoppingIcon from '../../../components/shoppingCart/shoppingIcon/ShoppingIcon'
import './PayShoppingPage.scss'
import Partner from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'

export class PayShoppingPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container pay">
          <div className="pay-title title-component">
            <p>
              <span>THANH TOÁN</span>
            </p>
          </div>
          <ShoppingIcon />
          <div className="pay-content">
            <form>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 payment-step">
                  <div className="user box">
                    <div className="title">
                      <span>1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</span>
                    </div>
                    <div className="user-infor border">
                      <div className="infor-pay">
                        <h6>THÔNG TIN THANH TOÁN</h6>
                        <Link className="line" to="">
                          Đăng ký tài khoản mua hàng
                        </Link>
                        <Link to="">Đăng nhập</Link>
                      </div>
                      <div className="infor-form">
                        <div className="form-group">
                          <label>Mua hàng không cần tài khoản</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Họ và Tên"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter number"
                            id="number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            id="address"
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select className="form-control" id="sel2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="4"
                            id="comment"
                          ></textarea>
                        </div>
                        <div className="form-check">
                          <label>THÔNG TIN GIAO HÀNG</label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultValue
                            />
                            Giao hàng địa chỉ khác
                          </label>
                        </div>

                        <div className="check-child">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Họ và Tên"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter number"
                              id="number"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email"
                              id="email"
                            />
                          </div>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control" id="sel2">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 payment-step">
                  <div className="train box">
                    <div className="title">
                      <span>2. THANH TOÁN VÀ VẬN CHUYỂN</span>
                    </div>
                    <div className="train-infor border">
                      <div className="form-group">
                        <label>VẬN CHUYỂN </label>
                        <select className="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>THANH TOÁN </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 payment-step">
                  <div className="product box">
                    <div className="title">
                      <span>3. THÔNG TIN ĐƠN HÀNG</span>
                    </div>
                    <div className="train-infor border">
                      <div className="name">
                        <span>Image</span>
                        <span>Xà lách trộn kiểu Nga x 1</span>
                        <span>59,000 ₫</span>
                      </div>
                      <div className="total-price">
                        <span>Thành Tiền</span>
                        <span>59,000 ₫</span>
                      </div>
                      <div className="shiping-price">
                        <span>Phí vận chuyển</span>
                        <span>0 ₫</span>
                      </div>
                      <div className="total-payment">
                        <span>Thanh Toán</span>
                        <span>0 ₫</span>
                      </div>
                      <button type="button" class="btn btn-dark">
                        ĐẶT HÀNG
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default PayShoppingPage
