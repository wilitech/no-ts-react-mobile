import * as  React from 'react';
import { List, Picker } from 'antd-mobile';
import { provinceLite } from 'antd-mobile-demo-data';

/** 所属地区 */
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

export default BelongDistrict