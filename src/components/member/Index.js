import * as React from 'react';
import { Toast } from 'antd-mobile';

export default class member extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="member">
        <ul>
          <li>
            <i></i>
            <p>标题文字</p>
          </li>
        </ul>
      </div>
    );
  }
};
