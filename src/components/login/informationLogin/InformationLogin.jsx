import React, { Component } from 'react'
import './InformationLogin.scss'
import { Link } from 'react-router-dom'


export class InformationLogin extends Component {
  render() {
    return (
       <div className="login-content" >
        <h1 className="title"><span>Đăng nhập hệ thống</span></h1>
        <div className="col-md-6  col-xs-12 col-sm-12 ">
          <form className="form-inline">
            <div className="form-group">
              <label  class="col-sm-4 control-label">Email</label>
              <div className="col-sm-8">
                <input type="email" className="form-control" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label  className="col-sm-4 control-label">Mật khẩu</label>
              <div className="col-sm-8">
                <input type="password" className="form-control"  required="required" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-8 button-login">
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                <Link href="/quen-mat-khau.html" className="forgetpassword">Quên mật khẩu?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
       
    )
  }
}

export default InformationLogin
