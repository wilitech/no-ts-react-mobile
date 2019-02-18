import * as React from 'react';
import { render } from 'react-dom'
import './index.less';

const popularList = ['拉菲珍宝红葡萄酒', '赤霞珠', '尝得到的一级庄韵', '法国拉菲传奇', '红酒之夜', '拉菲珍宝红葡萄酒', '尝得到的一级庄韵', '法国拉菲传奇', '法国拉菲传奇', '拉菲珍宝红葡萄酒']
const historyList = ['千红', '红葡萄酒', '千百', '飞粉色千红', '红葡萄酒', '千百']

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
            <input type="text" placeholder="搜索"/>
            <div className="icon-clear">
              <div className="icon-clear-a"></div>
              <div className="icon-clear-b"></div>
            </div>
          </div>
          <span className="btn-cancel">取消</span>
        </div>
        <div className="main">
          <div className="hot-search">
            <div>
              <span>热门搜索</span>
              <div className="dustbin"></div>
            </div>
           
            <ul>
              {
                popularList.map((item, index) => {
                  return <li key={index}><span className={index === 0 ? 'color-first' : index === 1 ? 'color-second' : index === 2 ? 'color-third' : ''}>{index + 1}.</span>{item}</li>
                })
              }
            </ul>
          </div>

          <div className="history-search">
          <div className="history-search-head">
              <span>历史搜索</span>
              <div className="dustbin"></div>
            </div>
            <ul>
              {
                historyList.map((item, index) => {
                  return (
                    <li key={index}><span>{item}</span><div className="icon-cross"></div></li>
                  )
                })
              }
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default home
