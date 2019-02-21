
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

const checkData = [
  { value: 0, label: 'Ph.D.' },
  { value: 1, label: 'Bachelor' },
  { value: 2, label: 'College diploma' },
];

/** 头部状态 start */
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

function StatusChild(props) {
  return (
    <div className="status">
      <div className="status-head">{props.status.statusName}</div>
      <div className="status-desc">{props.status.statusDsc}</div>
    </div>
  );
}

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barStatus: 0,
    }
  }

  setBars(index) {
    this.setState({
      barStatus: index
    })
  }

  render() {
    const statusArr = this.props.statusArr;
    let barspos = '';
    const BarItems = statusArr.map((v, index) => {
      switch(index) {
        case 0:
          barspos = 'bars-l';
          break;
        case 1:
          barspos = 'bars-c';
          break;
        case 2:
          barspos = 'bars-r';
          break;
      };
      return (
        <div key={index.toLocaleString()} className={`bars-item ${barspos} ${this.state.barStatus === index ? 'active' : ''}`} onClick={() => this.setBars(index)}></div>
      );
    });
    const StatusItems = statusArr.map((v, index) => 
      <StatusChild key={index.toLocaleString()} status={v} />
    );
    return (
      <div className="schedule">
        <div className="schedule-bars">
          {BarItems}
        </div>
        <div className="schedule-status">
          {StatusItems}
        </div>
      </div>
    )
  }
}
/** 头部状态 end */

/** 所属地区 start */
class BelongDistrict extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cols: 1,
      asyncValue: [],
    }
    this.changeAddress = this.changeAddress.bind(this)
    this.elAddress = this.elAddress.bind(this)
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

  elAddress() {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  }

  render() {
    return (
      <Picker
        data={this.state.data}
        cols={this.state.cols}
        value={this.state.asyncValue}
        onPickerChange={this.changeAddress}
        onOk={v => console.log(v)}
      >
        <List.Item arrow="horizontal" onClick={this.elAddress}>所属地区</List.Item>
      </Picker>
    )
  }
}
/** 所属地区 end */

/** 选择季节 start */
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
class ElSeasons extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sValue: ['2013', '春'],
    }
  }

  render() {
    return (
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
    )
  }
}
/** 选择季节 end */

/** 上下页 start */
class PrevnextPage extends React.Component {

  constructor(props) {
    super(props)
  }

  nextPage() {
    window.location.href ='/#/bank-card'
  }

  render() {
    return (
      <div className="basearrows">
        <div className="arrowbtn arrow-pre">
          <Icon color="#AEAEB0" type="left" size="sm"></Icon>
        </div>
        <div className="arrowbtn arrow-next" onClick={this.nextPage}>
          <Icon type="right" size="sm"></Icon>
        </div>
      </div>
    )
  }
}
/** 上下页 end */

class beforefrom extends React.Component {
  
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
        <ElSeasons />
        <div className="btngroup">
          <WingBlank>
            <Button className="btnword">按钮文字</Button>
          </WingBlank>
        </div>
        <PrevnextPage />
        
      </div>
    );
  }
}
const basefrom = createForm()(beforefrom);

export default basefrom
