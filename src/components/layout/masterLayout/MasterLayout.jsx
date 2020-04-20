import React, { Component } from 'react'
import { Header, Footer } from '../index'
export class MasterLayout extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    )
    return (
      <div>
        <Header></Header>
        <main className="">{childrenWithProps}</main>
        <Footer></Footer>
        <div className="back-to-top">
          <button className="btn-top" title="Go to top">
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default MasterLayout
