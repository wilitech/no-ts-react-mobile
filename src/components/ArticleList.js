import React, { Component } from 'react';
import { Toast } from 'antd-mobile';

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleSelectArticle = this.handleSelectArticle.bind(this);
  }
  
  handleSelectArticle() {
    this.props.selectArticle()
  }

  render() {
    return (
      <div className="article-list">
        {
          this.props.articleList.map((item, index) => {
            return (
              <div className="article-item" key={index}  onClick={this.handleSelectArticle}>
                <img src={item.imgUrl} alt=""/>
                <div className="acticle-info">
                  <span className="acticle-title">{item.title}</span>
                  <div className="acticle-other">
                    <span>{item.user}</span>
                    <span className="gray">浏览{item.browse}次</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
};
