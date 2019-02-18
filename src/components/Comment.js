import * as React from 'react';
import { Toast } from 'antd-mobile';

export default class comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    // lisk + 1
    Toast.success('点赞成功');
  }

  render() {
    return (
      <div className="comment">
        <p className="title">
          <span>所有评论</span>（{this.props.total}条）</p>
        {this.props.coments.map((comment, index) => {
          return <div className="comment-item" key={index}>
            <div className="user-info"><img src="http://lorempixel.com/30/30" alt="" className="avatar" />{comment.nickname}</div>
            <p className="comment-content">{comment.content}</p>
            <div className="comment-desc">
              <span className="date">{comment.date}</span>
              <span className="reply">回复({comment.reply})</span>
              <span className="like" onClick={this.handleLike}><i></i>{comment.like}</span>
            </div>
          </div>
        })}
      </div>
    );
  }
};
