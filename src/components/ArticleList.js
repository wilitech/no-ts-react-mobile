import * as React from 'react';
import { Toast } from 'antd-mobile';


export default class comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="article-list">
        {
          this.props.articleList.map((item, index) => {
            return (
              <div className="article-item" key={index}>
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
