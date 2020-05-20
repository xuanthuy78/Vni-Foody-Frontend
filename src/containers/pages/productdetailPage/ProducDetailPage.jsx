import React, { Component } from "react";
import MasterLayout from "../../../components/layout/masterLayout/MasterLayout";
import "./ProducDetailPage.scss";
import {
  HotProduct,
  MenuProductDetail,
  ProductDetailSidebar,
  AboutInformationProduct,
  ScriptAboutProduct,
} from "../../../components/productdetail/index";

export class ProducDetailPage extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
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
                <MenuProductDetail />
                <AboutInformationProduct />
                <ScriptAboutProduct></ScriptAboutProduct>
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    );
  }
}

export default ProducDetailPage;
