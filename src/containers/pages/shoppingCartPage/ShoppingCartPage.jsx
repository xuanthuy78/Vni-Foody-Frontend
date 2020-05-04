import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import './ShoppingCartPage.scss'
import Partner from '../../../components/product/partner/Partner'

export class ShoppingCartPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container shopping">
          <div className="shopping-title title-component">
            <p>
              <span>Giỏ hàng của tôi</span>
            </p>
          </div>
          <div className="shopping-icon"></div>
          <div className="shopping-content"></div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default ShoppingCartPage
