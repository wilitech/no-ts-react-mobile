import * as  React from 'react';
import { Icon } from 'antd-mobile';
import PropTypes from "prop-types";

import './PrevNext.less';

/** 前后页 */

class PrevNext extends React.Component {

  constructor(props) {
    super(props)
    this.prevHandler = this.prevHandler.bind(this)
    this.nextHandler = this.nextHandler.bind(this)
  }

  prevHandler() {
    this.props.prevHandler()
  }

  nextHandler() {
    this.props.nextHandler()
  }

  render() {
    const curpage = this.props.curpage
    const precolor = curpage === 'prev' ? '' : '#AEAEB0'
    const nextcolor = curpage === 'next' ? '' : '#AEAEB0'
    return (
      <div className="prevnext">
        <div className="arrowbtn arrow-pre" onClick={this.prevHandler}>
          <Icon color={precolor} type="left" size="sm"></Icon>
        </div>
        <div className="arrowbtn arrow-next" onClick={this.nextHandler}>
          <Icon color={nextcolor} type="right" size="sm"></Icon>
        </div>
      </div>
    )
  }
}

PrevNext.propTypes = {
  curpage: PropTypes.string.isRequired,
  prevHandler: PropTypes.func,
  nextHandler: PropTypes.func,
}

export default PrevNext