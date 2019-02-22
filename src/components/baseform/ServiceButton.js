import * as  React from 'react';
import { WingBlank, Button, Modal } from 'antd-mobile';

import './ServiceButton.less';

/** 同意协议并绑定 */
class ServiceButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modal1: false
    }
    this.showModal = this.showModal.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  showModal(e) {
    this.setState({
      modal1: true
    })
  }

  onClose() {
    this.setState({
      modal1: false
    })
  }

  render() {
    return (
      <div className="service">
        <WingBlank>
          <Button className="okbind" onClick={() => this.showModal()}>同意协议并绑定</Button>
          <div className="protocol">
            <a href="javascript:;">《服务协议》</a>
          </div>
        </WingBlank>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div className="modaltip">
            <p>您的银行卡卡号填写错误</p>
            <p>或卡号不存在</p>
          </div>
        </Modal>
      </div>
    )
  }
}

export default ServiceButton