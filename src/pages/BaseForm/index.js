import * as  React from 'react';
import {
  List, Radio, Checkbox, InputItem, Button, WingBlank
} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { createForm } from 'rc-form';
import PrevNext from '@/components/baseform/PrevNext';
import Schedule from '@/components/baseform/Schedule';
import BelongDistrict from '@/components/baseform/BelongDistrict';
import ElSeasons from '@/components/baseform/ElSeasons';

import './index.less';

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;

const radioData = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];

const checkData = [
  { value: 0, label: 'Ph.D.' },
  { value: 1, label: 'Bachelor' },
  { value: 2, label: 'College diploma' },
];

/** 头部状态 */
const getStatus = [
  {
    statusName: '状态名1',
    statusDsc: '状态描述1',
  },
  {
    statusName: '状态名2',
    statusDsc: '状态描述2',
  },
  {
    statusName: '状态名3',
    statusDsc: '状态描述3',
  },
];

/** 选择季节 */
const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
    {
      label: '2015',
      value: '2015',
    },
    {
      label: '2016',
      value: '2016',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
    {
      label: '秋',
      value: '秋',
    },
    {
      label: '冬',
      value: '冬',
    },
  ],
];

class BeforFrom extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.radioChange = this.radioChange.bind(this)
  }

  radioChange(value) {
    this.setState({
      value,
    });
  }

  checkChange(value) {
    console.log(value)
  }

  handleNext() {
    window.location.href ='/#/bank-card'
  }

  render() {
    const { value } = this.state;
    const { getFieldProps } = this.props.form;

    return (
      <div className="m-base">
        <Schedule statusArr={getStatus} />
        <List renderHeader={() => '基础选项'}>
          <InputItem
            placeholder="填写后不可修改"
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>真实姓名</div></InputItem>
          <BelongDistrict />
          <InputItem type="phone"
            placeholder="请输入手机号码"
          >手机号码</InputItem>
        </List>
        <List renderHeader={() => '单选框'}>
          {radioData.map(i => (
            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.radioChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
        <List renderHeader={() => '复选框'}>
          {checkData.map(i => (
            <CheckboxItem key={i.value} onChange={() => this.checkChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
        </List>
        <ElSeasons seasonsList={seasons} />
        <div className="btngroup">
          <WingBlank>
            <Button className="btnword">按钮文字</Button>
          </WingBlank>
        </div>

        <PrevNext curpage="next" nextHandler={this.handleNext} />
        
      </div>
    );
  }
}
const BaseForm = createForm()(BeforFrom);

export default BaseForm
