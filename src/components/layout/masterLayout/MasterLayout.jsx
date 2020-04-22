import React, { Component } from 'react'
import { Header, Footer } from '../index'
export class MasterLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: 0,
    }
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - 50)
  }
  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66)
    this.setState({ intervalId: intervalId })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    )
    return (
      <div>
        <Header></Header>
        <main className="">{childrenWithProps}</main>
        <Footer></Footer>
        <div className="back-to-top" onClick={this.scrollToTop}>
          <button className="btn-top" id="myBtn" title="Go to top">
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default MasterLayout
