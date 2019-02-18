import * as React from 'react';
import { render } from 'react-dom';
import ArticleList from "../components/ArticleList";
import './home-page.less';

// interface Props {};
// interface State {};

const classifyList = [
  {icon: 'trophy', title: '标题文字'}, 
  {icon: 'book', title: '标题文字'}, 
  {icon: 'activity', title: '标题文字'}, 
  {icon: 'other-classify', title: '标题文字'}
],
articleListData = [
  {imgUrl: 'http://thyrsi.com/t6/660/1547999542x2728329023.png', title: '帮大家总结了一下2018苹果秋季发布会', user: '天才小熊猫', browse: 127474 },
  {imgUrl: 'http://thyrsi.com/t6/660/1548001271x2890174315.png', title: '帮大家总结了一下2018苹果秋季发布会', user: '天才小熊猫', browse: 127474 },
  {imgUrl: 'http://thyrsi.com/t6/660/1548001289x2890174315.png', title: '帮大家总结了一下2018苹果秋季发布会', user: '天才小熊猫', browse: 127474 }
]

class home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-home">
        <div className="search">
          <div className="search-input">
            <div className="icon-search"></div>
            <span>搜索</span>
          </div>
        </div>
        <div className="main">
          <img className="banner" src="http://thyrsi.com/t6/660/1547990852x2890174106.png" alt=""/>
          <div className="classify">
            {
              classifyList.map((item, index) => {
                return (
                  <div className="classify-item" key={index}>
                    <div className={['classify-icon', item.icon].join(' ')} ></div>
                    <span>{item.title}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="ad">
            <img src="http://thyrsi.com/t6/660/1547997704x2890191853.png" alt=""/>
            <img className="mr15" src="http://thyrsi.com/t6/660/1547997723x2890191853.png" alt=""/>
          </div>
          <p></p>
          <div className="article">
            <div className="article-head">
              <span className="title">主标题</span>
              <div className="switch">
                <div className="icon-switch"></div>
                <span>换一批</span>
              </div>
            </div>
            <ArticleList
              articleList={articleListData} />
          </div>
        </div>
      </div>
    );
  }
}

export default home
