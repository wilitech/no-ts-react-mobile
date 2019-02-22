import * as  React from 'react';
import { InputItem, List, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import ServiceButton from '@/components/baseform/ServiceButton';
import PrevNext from '@/components/baseform/PrevNext';

import './BankCard.less';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePrev() {
    window.location.href ='/#/base-from'
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
        <ServiceButton />
        <PrevNext curpage="prev" prevHandler={this.handlePrev} />
      </div>
    );
  }
}
const bankCard = createForm()(Card);

export default bankCard