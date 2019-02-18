
import * as  React from 'react';
import { render } from 'react-dom';
import { Icon } from 'antd-mobile';
import './index.less';

class basefrom extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="m-base">
        <div className="basegroup">
          <div className="basehead">基础选项</div>
          <div className="basecontain pdl">
            <div className="basewrite bor-bottom">
              <div className="basewrite-l">
                <span className="inptip">真实姓名</span>
                <input className="inptext" type="text" placeholder="（填写后不可修改）" />
              </div>
              <div className="basewrite-r">填写姓名</div>
            </div>
          </div>
        </div>
        <div className="basegroup">
          <div className="basecontain pdl">
            <div className="basewrite">
              <div className="basewrite-l">
                <span className="inptip">个人联系电话</span>
                <input className="inptext" type="text" placeholder="（选填）" />
              </div>
              <div className="basewrite-r">填写电话</div>
            </div>
          </div>
        </div>
        <div className="basegroup">
          <div className="basehead">单选框</div>
          <div className="basecontain">
            <div className="baseradio bor-bottom">
              <div className="baseraido-l">单项</div>
              <div className="baseraido-r"></div>    
            </div>
            <div className="baseradio">
              <div className="baseraido-l">单项</div>
              <div className="baseraido-r">
                <Icon type="check" size="sm" />
              </div>    
            </div>
          </div>
        </div>
        <div className="basegroup">
          <div className="basehead">复选框</div>
          <div className="basecontain">
           <div className="basefx">
            <div className="basefx-l">多项选择</div>
            <div className="basefx-r">
              <Icon type="check-circle-o" size="sm" />
            </div>
           </div>
           <div className="basefx">
            <div className="basefx-l">多项选择</div>
            <div className="basefx-r">
              <Icon type="check-circle-o" size="sm" />
            </div>
           </div>
           <div className="basefx">
            <div className="basefx-l">多项选择</div>
            <div className="basefx-r">
              <Icon type="check-circle-o" size="sm" />
            </div>
           </div>
          </div>
        </div>
        <div className="basegroup">
          <div className="basehead">标签</div>
          <div className="basecontain">
            <div className="basestyle">
              <div className="basestyle-l">擅长风格</div>
              <div className="basestyle-r">
                 <span className="stylebtn">地中海式</span>
                 <span className="stylebtn">现代简约</span>
                 <span className="stylebtn">中式</span>
              </div>
            </div>
          </div>
        </div>
        <div className="basegroup">
          <div className="basecontain">
            <div className="basebtn">按钮文字</div>
          </div>
        </div>
        <div className="basearrows">
          <div className="arrowbtn arrow-pre">
            <Icon type="left" size="sm"></Icon>
          </div>
          <div className="arrowbtn arrow-next">
            <Icon type="right" size="sm"></Icon>
          </div>
        </div>
      </div>
    );
  }
}

export default basefrom
