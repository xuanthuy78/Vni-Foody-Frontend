import React, { Component } from 'react'
import './InformationAccount.scss'


export class InformationAccount extends Component {
  render() {
    return (
        <div className="register-bottom">
          <div className="register-title">
             <h3 className="title">ĐĂNG KÝ TÀI KHOẢN</h3>
          </div>
          <div className="title-informationaccount">
             <h2 className="title"><span>Thông tin tài khoản</span></h2>
         </div>
           <form className="form-horizontal ">
             <div className="form-group">
               <label  className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">Tài khoản<span className="warning">(*)</span></label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                   <input type="text" className="form-control"/>
                </div>
             </div>
             <div className="form-group">
                <label  className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">Email<span className="warning">(*)</span></label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                   <input type="email" className="form-control "/>
                </div>
             </div>
             <div className="form-group">
                <label  className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">Mật khẩu<span className="warning">(*)</span></label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                   <input type="password" className="form-control"/>
                </div>
             </div>
             <div className="form-group">
                <label  className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 control-label">Nhập lại mật khẩu <span className="warning">(*)</span></label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <input type="password" className="form-control" />
                </div>
             </div>
          </form>
       </div>
    )
  }
}

export default InformationAccount
