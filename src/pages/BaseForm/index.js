
import * as  React from 'react';
import { render } from 'react-dom';
import {
  Icon, List, Radio, Flex, WhiteSpace, Checkbox, InputItem, Button, WingBlank, Picker
} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { createForm } from 'rc-form';

import './index.less';

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;

const radioData = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];

console.log('provinceLite', provinceLite)

const checkData = [
  { value: 0, label: 'Ph.D.' },
  { value: 1, label: 'Bachelor' },
  { value: 2, label: 'College diploma' },
];

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);
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

class beforefrom extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      cols: 1,
      asyncValue: [],
      barStatus: 0,
      value: 0,
      sValue: ['2013', '春'],
    };
    this.radioChange = this.radioChange.bind(this)
    this.elAddress = this.elAddress.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
  }

  elAddress() {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
      console.log(this.state, 'state')
    }, 120);
  }

  changeAddress(val) {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  }

  setBars(index) {
    this.setState({
      barStatus: index,
    })
  }

  nextPage() {
    window.location.href ='/#/bank-card'
  }

  radioChange(value) {
    this.setState({
      value,
    });
  }

  checkChange(value) {
    console.log(value)
  }

  render() {
    const { value } = this.state;

    
    const { getFieldProps } = this.props.form;

    return (
      <div className="m-base">
        <div className="schedule">
          <div className="schedule-bars">
            <div className={`bars-item bars-l ${this.state.barStatus === 0 ? 'active': null}`} onClick={() => this.setBars(0)}></div>
            <div className={`bars-item bars-c ${this.state.barStatus === 1 ? 'active': null}`} onClick={() => this.setBars(1)}></div>
            <div className={`bars-item bars-r ${this.state.barStatus === 2 ? 'active': null}`} onClick={() => this.setBars(2)}></div>
          </div>
          <div className="schedule-status">
            <div className="status">
              <div className="status-head">状态名1</div>
              <div className="status-desc">状态描述</div>
            </div>
            <div className="status">
              <div className="status-head">状态名2</div>
              <div className="status-desc">状态描述</div>
            </div>
            <div className="status">
              <div className="status-head">状态名3</div>
              <div className="status-desc">状态描述</div>
            </div>
          </div>
        </div>
        <List renderHeader={() => '基础选项'}>
          <InputItem
            placeholder="填写后不可修改"
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>真实姓名</div></InputItem>
          <Picker
            data={this.state.data}
            cols={this.state.cols}
            value={this.state.asyncValue}
            onPickerChange={this.changeAddress}
            onOk={v => console.log(v)}
          >
            <List.Item arrow="horizontal" onClick={this.elAddress}>所属地区</List.Item>
          </Picker>
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
        <List renderHeader={() => '标签'}>
          <Picker
            data={seasons}
            title="选择季节"
            cascade={false}
            extra="请选择(可选)"
            value={this.state.sValue}
            onChange={v => this.setState({ sValue: v })}
            onOk={v => this.setState({ sValue: v })}
          >
            <List.Item arrow="horizontal">选择季节</List.Item>
          </Picker>
        </List>
        <div className="btngroup">
          <WingBlank>
            <Button className="btnword">按钮文字</Button>
          </WingBlank>
        </div>
        <div className="basearrows">
          <div className="arrowbtn arrow-pre">
            <Icon color="#AEAEB0" type="left" size="sm"></Icon>
          </div>
          <div className="arrowbtn arrow-next" onClick={this.nextPage}>
            <Icon type="right" size="sm"></Icon>
          </div>
        </div>
      </div>
    );
  }
}
const basefrom = createForm()(beforefrom);

export default basefrom
