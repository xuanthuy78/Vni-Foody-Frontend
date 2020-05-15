import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeAdminPage.scss'

export class HomeAdminPage extends Component {
  render() {
    return (
      <div className="admin-container">
        <header className="header">
          <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="border-logo">
              <img
                className="images-logo"
                src={'assets/images/logo.png'}
                alt="Logo"
              />
            </div>
            <div className="btn-toggler ml-5">
              <button type="button" className="btn btn-secondary">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div className="information collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <span className="badge badge-danger">22</span>
                    <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="#">
                    <span className="badge badge-danger">8</span>
                    <i
                      className="fa fa-commenting-o fa-lg"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li className="nav-item clock">
                  <Link className="nav-link name" to="#">
                    <span className="fullname mr-2">Valerie Luna</span>
                    <i
                      className="fa fa-user-circle fa-lg"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="sidebar-menu">
          <ul className="navbar-nav" id="accordion">
            <li className="nav-item">
              <Link
                className="nav-link parent"
                data-toggle="collapse"
                to={{ pathname: '#user' }}
              >
                <span className="icon">
                  <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                </span>
                <span className="title">User</span>
                <span className="arrive">
                  <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
                </span>
              </Link>
              <ul
                id="user"
                data-parent="#accordion"
                className="navbar-nav collapse children"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="mr-3 fa fa-list-ul" aria-hidden="true"></i>
                    <span className="item title">List</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i
                      className="mr-3 item fa fa-plus-square-o"
                      aria-hidden="true"
                    ></i>
                    <span className="title">Created User</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i
                      className="mr-3 item fa fa-pencil-square-o"
                      aria-hidden="true"
                    ></i>
                    <span className="item title">Edit User</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link parent"
                data-toggle="collapse"
                to={{ pathname: '#product' }}
              >
                <span className="icon">
                  <i
                    className="fa fa-product-hunt fa-lg"
                    aria-hidden="true"
                  ></i>
                </span>
                <span className="title">Product</span>
                <span className="arrive">
                  <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
                </span>
              </Link>
              <ul
                id="product"
                data-parent="#accordion"
                className="navbar-nav collapse children"
              >
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i className="mr-3 fa fa-list-ul" aria-hidden="true"></i>
                    <span className="item title">List</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i
                      className="mr-3 item fa fa-plus-square-o"
                      aria-hidden="true"
                    ></i>
                    <span className="title">Created</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i
                      className="mr-3 item fa fa-pencil-square-o"
                      aria-hidden="true"
                    ></i>
                    <span className="item title">Edit User</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <main className="left-content">
          <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  defaultValue="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

export default HomeAdminPage
