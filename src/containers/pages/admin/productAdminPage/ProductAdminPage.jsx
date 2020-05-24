import React, { Component } from 'react'
import './ProductAdminPage.scss'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Table, Space } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Describe',
    dataIndex: 'describe',
    key: 'describe',
    render: (text) => <div className="describe">{text}</div>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link to="#">Delete</Link>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    id: '1323469',
    image: 'ảnh',
    name: 'John Brown',
    type: 'Cơm',
    number: '10',
    describe:
      'Description Description Description DDescription Description DescriptDescription Description DescriptDescription Description DescriptDescription Description Descriptescription Description Description Description Description Description Description Description DescriptionDescription',
  },
]

export class ProductAdminPage extends Component {
  render() {
    return (
      <MasterLayoutAdmin>
        <div className="main-detail">
          <div className="filter mb-3">
            <div className="nav-filter">
              <div className="nav-item search">
                <div className="item result">
                  <Link to="#" className="navbar-brand">
                    30 <span>Products</span>
                  </Link>
                </div>
                <form className="item form-inline">
                  <label className="title" htmlFor="parts-type">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="name"
                  />
                  <label lass="title" htmlFor="item-name">
                    Type:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    placeholder="category"
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-search mr-2" aria-hidden="true"></i>
                    <span className="title-search">Search</span>
                  </button>
                </form>
              </div>
              <div className="nav-item add-master">
                <Link type="submit" className="btn btn-warm" to="#">
                  <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                  <span className="title-add">Add</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="table">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </MasterLayoutAdmin>
    )
  }
}

export default ProductAdminPage
