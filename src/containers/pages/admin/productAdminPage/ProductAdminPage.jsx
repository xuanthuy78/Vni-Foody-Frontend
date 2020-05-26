import React, { Component } from 'react'
import './ProductAdminPage.scss'
import CreateEditProduct from '../../../../components/admin/productAdmin/CreateEditProduct'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Table, Space, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'

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

const { confirm } = Modal
export class ProductAdminPage extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: null,
      columns: null,
      visible: false,
      title: null,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.buildColumsFromDatasource(data)
    }, 1000)
  }
  // modal
  showModalCreate = () => {
    this.setState({
      visible: true,
      title: 'Create Product',
    })
  }

  showModalEdit = () => {
    this.setState({
      visible: true,
      title: 'Edit Product',
    })
  }

  handleOk = (e) => {
    console.log(e.value)
    this.setState({
      visible: false,
    })
  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  // end modal
  // modal delete
  showConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content:
        'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {},
    })
  }

  buildColumsFromDatasource(dataSource) {
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
        width: 150,
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
          <Space size="middle" className="icon-btn">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.showModalEdit}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.showConfirm}
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </Space>
        ),
      },
    ]
    this.setState({ dataSource, columns })
  }

  render() {
    const { dataSource, columns } = this.state

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
                <button
                  type="submit"
                  className="btn btn-warm"
                  onClick={this.showModalCreate}
                >
                  <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                  <span className="title-add">Add</span>
                </button>
              </div>
            </div>
          </div>
          <div className="table">
            <Table columns={columns} dataSource={dataSource} />
          </div>
          <CreateEditProduct
            visible={this.state.visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            title={this.state.title}
          />
        </div>
      </MasterLayoutAdmin>
    )
  }
}

export default ProductAdminPage
