import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-product">
        <h3 className="title">
          Sản phẩm
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        <ul className="nav nav-pills flex-column menu-main">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-arrow-circle-right" />
              THỰC ĐƠN CHÍNH
              <i className="fa fa-angle-down float-right" />
            </Link>
            <ul className="nav nav-pills flex-column menu-child">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Món khai vị
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Pizza
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Salad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Súp Táo mỹ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Bồ câu quay ngũ vị
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-check" />
                  Mỳ ý spaghetti
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-arrow-circle-right" />
              THỰC ĐƠN ĐẶC BIỆT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-arrow-circle-right" />
              Cơm
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-arrow-circle-right" />
              Cháo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fa fa-arrow-circle-right" />
              Phở
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
