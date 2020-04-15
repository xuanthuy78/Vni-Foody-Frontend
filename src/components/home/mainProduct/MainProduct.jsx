import React, { Component } from 'react'
import './MainProduct.scss'
import MainItem from '../mainItem/MainItem'
import { Pagination } from 'antd'

export class MainProduct extends Component {
  render() {
    return (
      <div className="main-product">
        <div className="product-top">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="product-title float-left">
                <h3 className="title">Sản phẩm</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="product-sort float-right">
                <h3 className="title">Sắp xếp</h3>
                <select id="cars">
                  <option value="volvo">Mặc định</option>
                  <option value="saab">Giá tăng dần</option>
                  <option value="mercedes">Giá giảm dần</option>
                  <option value="audi">Tên sản phẩm: A to Z</option>
                  <option value="audi">Tên sản phẩm: Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="row">
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
          </div>
          <div className="pagination justify-content-center">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <div className="product-bottom">
          <h3 className="title">TIN ẨM THỰC</h3>
        </div>
      </div>
    )
  }
}

export default MainProduct
