import * as React from 'react';
import { render } from 'react-dom';
import { Icon, Modal } from 'antd-mobile';
import Temple from "@/components/member/Index";
import './index.less';
// import { content, comments } from "../../static/articledata";

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

const navList = ['标题文字1', '标题文字2', '标题文字3', '标题文字4']

class detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  // showModal(e) {
  //   e.preventDefault(); // 修复 Android 上点击穿透
  //   this.setState({
  //     [key]: true,
  //   });
  // }

  // onClose = key => () => {
  //   this.setState({
  //     [key]: false,
  //   });
  // }

  // onWrapTouchStart = (e) => {
  //   // fix touch to scroll background page on iOS
  //   if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
  //     return;
  //   }
  //   const pNode = closest(e.target, '.am-modal-content');
  //   if (!pNode) {
  //     e.preventDefault();
  //   }
  // }
  
  render() {
    return (
      <div className="member">
        <div className='member-login'>
          <i></i>
          <p>立即登录</p>
        </div>
        <div className='depart-line'></div>
        <ul className='member-nav'>
          {
            navList.map(($v, $k) => {
              return <li className='member-nav-list' key={$k}>{ $v }<Icon type="right" /></li>
            })
          }
        </ul>
        {/* <Modal
          popup
          visible={this.state.modal}
          onClose={this.onClose('modal')}
          animationType="slide-up"
          afterClose={() => { console.log('afterClose'); }}
          >
            <span>111</span>
          </Modal> */}
      </div>
    );
  }
}

export default detail
