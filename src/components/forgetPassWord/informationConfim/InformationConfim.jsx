import React, { Component } from 'react'
import './InformationConfim.scss'
import { Link } from 'react-router-dom'


export class InformationConfim extends Component {
  render() {
    return (
        <div className="forgetpassword-bottom">
           <div className="forgetpassword-title">
           <h3 className="title">Quên mật khẩu</h3>
           </div>
         <div className="alert alert-info">
           <button  className="close" />
           <i className="fa fa-check" aria-hidden="true"></i> 
            Điền vào email của bạn để yêu cầu một mật khẩu mới. Một Email sẽ được gửi đến địa chỉ này để xác minh địa chỉ Email của bạn.
         </div>
         <form className="form-horizontal ">
           <div className="form-group">
            <label className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input type="email" className="form-control " />
            </div>
           </div>
           <div className="form-group">
            <div className="offset-4 col-sm-8 button-login">
              <button type="submit" className="btn btn-primary">Gửi mật khẩu</button>
               <Link to="/RegisterPage" className="registerPage">Quay lại đăng nhập</Link>
            </div>
           </div>
          </form>
       </div>
    )
  }
}

export default InformationConfim