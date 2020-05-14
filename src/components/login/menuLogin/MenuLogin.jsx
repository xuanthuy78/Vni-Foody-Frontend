import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MenuLogin.scss'

export class MenuLogin extends Component {
  render() {
    return (
      <div className="menu-login">
        <nav className="navbar navbar-expand-sm" >
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="#"><span className="title">Trang chủ</span></Link></li>
            <li className="nav-item"><Link className="nav-link" to="#"><i className="fa fa-angle-double-right icon-link" aria-hidden="true"></i></Link></li>
            <li className="nav-item"><Link className="nav-link" to="#"><strong className="last-child">Đăng nhập</strong></Link></li>
            
          </ul>
        </nav>
        <div>
          
        </div>
     </div>
    )
  }
}

export default MenuLogin
