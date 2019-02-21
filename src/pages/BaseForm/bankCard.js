import * as  React from 'react';
import { render } from 'react-dom';
import {
  WhiteSpace, InputItem, List, WingBlank, Icon, Button, Modal
} from 'antd-mobile';
import { createForm } from 'rc-form';
import './bankCard.less';

/** 同意协议并绑定 start */
class ServerButton extends React.Component {

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
      <div className="serve">
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
/** 同意协议并绑定 end */

/** 上下页 start */
class PrevnextPage extends React.Component {

  constructor(props) {
    super(props)
  }

  prevPage() {
    window.location.href ='/#/base-from'
  }

  render() {
    return (
      <div className="basearrows">
        <div className="arrowbtn arrow-pre" onClick={this.prevPage}>
          <Icon type="left" size="sm"></Icon>
        </div>
        <div className="arrowbtn arrow-next">
        <Icon color="#AEAEB0" type="right" size="sm"></Icon>
        </div>
      </div>
    )
  }
}
/** 上下页 end */

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="bankCard">
        <List>
          <WingBlank>
            <InputItem
              {...getFieldProps('name')}
              placeholder="请输入持卡人姓名"
              ref={el => this.autoFocusInst = el}
            >持卡人</InputItem>
            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder="请输入您的有效身份证号码"
              ref={el => this.autoFocusInst = el}
            >身份证</InputItem>
            <InputItem
              {...getFieldProps('bankCard')}
              clear
              placeholder="请输银行卡账号"
              ref={el => this.autoFocusInst = el}
            >卡号</InputItem>
            <InputItem
              value="储蓄卡／建设银行"
              editable={false}
            >卡类型</InputItem>
            <InputItem
              {...getFieldProps('phone')}
              type="phone"
              placeholder="请输入银行卡预留手机号"
            >手机号码</InputItem>
            <InputItem
              maxLength={6}
              placeholder="请输入6位数验证码"
              extra="发送验证码"
              ref={el => this.autoFocusInst = el}
            >验证码</InputItem>
          </WingBlank>
        </List>
        <ServerButton />
        <PrevnextPage />
      </div>
    );
  }
}
const bankCard = createForm()(Card);

export default bankCard