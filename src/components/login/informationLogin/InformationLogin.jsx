import React, { Component } from 'react'
import './InformationLogin.scss'
import { Link } from 'react-router-dom'


export class InformationLogin extends Component {
  render() {
    return (
       <div className="login-content" >
        <h1 className="title"><span>Đăng nhập hệ thống</span></h1>
        <div className=" ">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 control-label">Email</label>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                <input type="email" className="form-control" required="required" />
              </div>
            </div>
            <div className="form-group">
              <label  className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 control-label">Mật khẩu</label>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                <input type="password" className="form-control"  required="required" />
              </div>
            </div>
            <div className="form-group">
              <div className=" offset-5 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 button-login">
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                <Link to="#" className=" forgetpassword">Quên mật khẩu?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
       
    )
  }
}

export default InformationLogin
