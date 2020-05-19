import React, { Component } from 'react'
import HeaderAdmin from '../headerAdmin/HeaderAdmin'
import SidebarAdmin from '../sidebarAdmin/SidebarAdmin'
import './MasterLayoutAdmin.scss'

export class MasterLayoutAdmin extends Component {
  constructor() {
    super()
    this.state = {
      showSidebar: true,
    }
  }
  handleShowSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
    })
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    )
    return (
      <div className="admin-container">
        <HeaderAdmin showSidebar={this.handleShowSidebar} />
        {this.state.showSidebar && <SidebarAdmin />}
        <main
          className={this.state.showSidebar ? 'left-content' : 'main-content'}
        >
          {childrenWithProps}
        </main>
      </div>
    )
  }
}

export default MasterLayoutAdmin
