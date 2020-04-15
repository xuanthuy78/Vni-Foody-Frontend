import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="container">
          <section className="header-link">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <nav className="navbar navbar-expand-md bg-success navbar-dark">
                  {/* Brand */}
                  <Link className="navbar-brand" to="#">
                    <i className="fa fa-phone" />
                    Hotline:0908770095
                  </Link>
                  {/* Toggler/collapsibe Button */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* Navbar links */}
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="collapsibleNavbar "
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <i className="fa fa-pencil-square-o" />
                          Kiểm tra đơn hàng
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <i className="fa fa-shopping-cart" />
                          Giỏ hàng
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <i className="fa fa-sign-in" />
                          Đăng nhập
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <i className="fa fa-key" />
                          Đăng ký
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </section>
          <section className="header-content">
            <nav className="navbar navbar-light bg-light justify-content-between">
              <Link className="navbar-brand" to="#">
                <img src={'assets/images/logo.png'} alt="Logo" />
              </Link>
              <form className="form-inline">
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    id="txtsearch"
                    className="form-control"
                    placeholder="Tìm kiếm..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </section>
          <section className="header-menu">
            <ul className="nav">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Trang Chủ
                </Link>
                <div className="menu-caret" />
              </li>
              <li className="menu-icon">/</li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Sản Phẩm
                </Link>
                <div className="menu-caret" />
              </li>
              <li className="menu-icon">/</li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Tin Tức
                </Link>
                <div className="menu-caret" />
              </li>
              <li className="menu-icon">/</li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Giới thiệu
                </Link>
                <div className="menu-caret" />
              </li>
              <li className="menu-icon">/</li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Liên hệ
                </Link>
                <div className="menu-caret" />
              </li>
            </ul>
          </section>
        </div>
      </header>
    )
  }
}

export default Header
