import * as  React from 'react';
import PropTypes from 'prop-types';
import { List, Picker } from 'antd-mobile';

class ElSeasons extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sValue: ['2013', '春'],
    }
  }

  render() {
    return (
      <List renderHeader={() => '标签'}>
        <Picker
          data={this.props.seasonsList}
          title="选择季节"
          cascade={false}
          extra="请选择(可选)"
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">选择季节</List.Item>
        </Picker>
      </List>
    )
  }
}

ElSeasons.proptype = {
  seasonsList: PropTypes.array.isRequired,
}

export default ElSeasons