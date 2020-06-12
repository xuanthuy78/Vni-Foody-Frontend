import React, { Component } from 'react'
import './AboutInformationProduct.scss'
import { Link } from 'react-router-dom'

export class AboutInformationProduct extends Component {
  handleShowModalView = () => {
    this.props.handleShowModalView()
  }
  render() {
    return (
      <div className="information-product">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="product-image">
              <img
                className="img-top"
                src={'assets/images/sup_cua_large.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="information-title">
              <h2 className="title">Xà lách trộn kiểu Nga</h2>
            </div>
            <div className="price-product">
              <span className="price-new">59,000đ</span>
            </div>
            <div className="code-product">
              <span className="text-social">Mã SP: </span>
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
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
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
                  <ul className="navbar-nav">
                    <li className="nav-item text-share text-share">
                      <i className="fa fa-plus-square" aria-hidden="true" />
                      chia sẻ
                      <ul className="navbar-nav button-social">
                        <li className="nav-item">
                          <i
                            className="fa fa-facebook-square"
                            aria-hidden="true"
                          />
                          <span className="text-social"> FaceBook</span>
                        </li>
                        <li className="nav-item">
                          <i className="fa fa-twitter" aria-hidden="true" />
                          <span className="text-social"> Twitter</span>
                        </li>
                        <li className="nav-item">
                          <i className="fa fa-envelope" aria-hidden="true" />
                          <span className="text-social"> Email</span>
                        </li>
                        <li className="nav-item">
                          <i className="fa fa-pinterest" aria-hidden="true" />
                          <span className="text-social"> Pinterset</span>
                        </li>
                        <li className="nav-item">
                          <i
                            className="fa fa-google-plus-square"
                            aria-hidden="true"
                          />
                          <span className="text-social"> Google+</span>
                        </li>
                        <li className="nav-item">
                          <i class="fa fa-print" aria-hidden="true" />
                          <span className="text-social">Print</span>
                        </li>
                        <li className="nav-item">
                          <i
                            className="fa fa-plus-square add"
                            aria-hidden="true"
                          />
                          <span className="text-social">Add</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
              <Link
                to="#"
                className="btn btn-dark"
                onClick={this.handleShowModalView}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Thêm
                giỏ hàng
              </Link>
              <Link to="/shopping-cart" className="btn btn-danger">
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
