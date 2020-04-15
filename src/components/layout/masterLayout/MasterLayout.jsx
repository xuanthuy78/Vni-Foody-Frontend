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
      </div>
    )
  }
}

export default MasterLayout
