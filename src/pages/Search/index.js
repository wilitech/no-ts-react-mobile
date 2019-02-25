import * as React from 'react';
import { createHashHistory } from 'history';
import { Modal, Toast } from 'antd-mobile';
import './index.less';

const alert = Modal.alert;
const popularList = ['拉菲珍宝红葡萄酒', '赤霞珠', '尝得到的一级庄韵', '法国拉菲传奇', '红酒之夜', '拉菲珍宝红葡萄酒', '尝得到的一级庄韵', '法国拉菲传奇', '法国拉菲传奇', '拉菲珍宝红葡萄酒'];
const historyList = ['千红', '红葡萄酒', '千百', '飞粉色千红', '红葡萄酒', '千百'];

class home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      popularList: [],
      historyList: []
    }
    this.changeSearchText = this.changeSearchText.bind(this);
    this.handleSearchBtn = this.handleSearchBtn.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.bindleDeleteAllHistory = this.bindleDeleteAllHistory.bind(this);
  }

  changeSearchText(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  handleSearchBtn() {
    const searchText = this.state.searchText
    if (searchText) {
      let historyList = this.state.historyList;
      historyList.forEach((item, index) => {
        item === searchText && historyList.splice(index, 1)
      })
      historyList.unshift(searchText);
      historyList.length > 8 && historyList.splice(historyList.length - 1, 1)
      this.setState({
        historyList: historyList
      });
      Toast.info('没有你想要的结果', 1);
    } else {
      createHashHistory().push('/');
    }
  }
  handleClearInput() {
    this.setState({
      searchText: ''
    });
  }
  handleDeleteHistory(index) {
    let historyList = this.state.historyList;
    historyList.splice(index, 1);
    this.setState({
      historyList: historyList
    });
  }
  bindleDeleteAllHistory() {
    alert('提示', '确定删除全部历史记录???', [
      { text: '取消', onPress: () => null },
      {
        text: '确定',
        onPress: () => {
          this.setState({
            historyList: []
          })
        }
      },
    ])
  }

  render() {
    return (
      <div className="p-home">
        <div className="search">
          <div className="search-input">
            <div className="icon-search"></div>
            <input type="text" placeholder="搜索" value={this.state.searchText} onChange={this.changeSearchText}/>
            {
              this.state.searchText ? (
                <div className="icon-clear" onClick={this.handleClearInput}>
                  <div className="icon-clear-a"></div>
                  <div className="icon-clear-b"></div>
                </div>
              ) : null
            }
          </div>
          <span className="btn-cancel" onClick={this.handleSearchBtn}>{this.state.searchText ? '搜索' : '取消'}</span>
        </div>
        <div className="main">
          <div className="hot-search">
            <div>
              <span>热门搜索</span>
              <div className="dustbin"></div>
            </div>
            <ul>
              {
                this.state.popularList.map((item, index) => {
                  return <li key={index}><span className={index === 0 ? 'color-first' : index === 1 ? 'color-second' : index === 2 ? 'color-third' : ''}>{index + 1}.</span>{item}</li>
                })
              }
            </ul>
          </div>
          <div className="history-search">
          <div className="history-search-head">
              <span>历史搜索</span>
              <div className="dustbin" onClick={this.bindleDeleteAllHistory}></div>
            </div>
            <ul>
              {
                this.state.historyList.map((item, index) => {
                  return (
                    <li key={index}><span>{item}</span><div className="icon-cross" onClick={this.handleDeleteHistory.bind(this, index)}></div></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      popularList: popularList,
      historyList: historyList
    });
  }
}

export default home
