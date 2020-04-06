import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

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
