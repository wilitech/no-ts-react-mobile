import * as React from 'react';

export default class article extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup() {
    return { __html: this.props.content }
  }

  render() {
    return (
      <div className="content">
        <h3>{this.props.title}</h3>
        <p className="desc">频道：<span>经验 | 新的 | 美食</span>话题：<span>红酒</span></p>
        <p className="desc">时间：2019-01-20</p>
        <div className="article" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      </div>
    );
  }
};
