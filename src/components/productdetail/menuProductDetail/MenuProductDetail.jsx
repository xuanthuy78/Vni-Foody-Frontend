import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MenuProductDetail.scss";

export class MenuProductDetail extends Component {
  render() {
    return (
      <div className="main-menu">
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Trang Chủ
              </Link>
            </li>
            <li className="nav-item icon-link">
              <Link className="nav-link" to="#">
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Thực đơn chính
              </Link>
            </li>
            <li className="nav-item icon-link">
              <Link className="nav-link" to="#">
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link " to="#">
                <strong> Supreme</strong>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuProductDetail;
