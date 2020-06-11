import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './ProducDetailPage.scss'
import {
  HotProduct,
  ProductDetailSidebar,
  AboutInformationProduct,
  ScriptAboutProduct,
  MenuProductDetail,
} from '../../../components/productdetail/index'
import ModalView from '../../../components/productdetail/modalView/ModalView'

export class ProducDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModalView: false,
    }
  }
  handleShowModalView = () => {
    this.setState({
      showModalView: !this.state.showModalView,
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      showModalView: false,
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      showModalView: false,
    })
  }
  render() {
    console.log(this.state.showModalView)
    return (
      <MasterLayout>
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="siderba order-02">
                  <ProductDetailSidebar></ProductDetailSidebar>
                </div>
                <div className="product-detail order-03">
                  <HotProduct></HotProduct>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 order-01">
                <MenuProductDetail></MenuProductDetail>
                <AboutInformationProduct
                  handleShowModalView={this.handleShowModalView}
                />
                <ModalView
                  displayModalView={this.state.showModalView}
                  funtionCantion={this.handleCancel}
                />

                <ScriptAboutProduct></ScriptAboutProduct>
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ProducDetailPage
