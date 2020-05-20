import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SidebarAccount.scss'

export class SidebarAccount extends Component {
  render() {
    return (
     <div className="sidebar-account">
        <div className="login-title">
           <h3 className="title">Tài khoản<i className="fa fa-bars float-right" aria-hidden="true" /></h3>
        </div>
         <ul className="nav nav-pills flex-column menu-main">
            <li className="nav-item">
              <Link className="nav-link silebar-border" to="/LoginPage"> <i className="fa fa-sign-out" aria-hidden="true"/>Đăng nhập </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link silebar-border" to="/RegisterPage"><i className="fa fa-key" aria-hidden="true"/> Đăng ký</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forgetPassWord"><i className="fa fa-key"/>Quên mật khẩu</Link>
           </li>
         </ul>
     </div>
                 
    );
  }
}
export default SidebarAccount

