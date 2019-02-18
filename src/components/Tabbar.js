import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; 
import './tabbar.less';

const tabbarList = ['首页', '发现', '圈子', '我的']

class tabbar extends React.Component {
  constructor(props) {
    super(props);
    // 第二种绑定this的方式
    // this.handleSelect = this.handleSelect.bind(this);
    this.state = { active: 0 };
  }

  handleSelect(index, event) {
    this.setState({ active: index });
    // todo 跳转
    console.log(index)
    switch (index) {
      case 0:
        window.location.href = '/#/'
        break
      case 1:
        window.location.href = '/#/Article-detail'
        break
      case 2:
        window.location.href = '/#/member'
        break
      case 3:
        window.location.href = '/#/base-from'
        break
    }
  }

  render() {
    return (
      <div className="tabbar-ul">
        {
          tabbarList.map((name, index) => {
            return <div className={this.state.active === index ? 'tabbar-li active' : 'tabbar-li'} onClick={this.handleSelect.bind(this, index)} key={index}>{name}</div>
          })
        }
      </div>
    );
  }
}

export default tabbar
