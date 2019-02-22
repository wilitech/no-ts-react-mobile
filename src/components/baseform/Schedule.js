import * as  React from 'react';
import ScheduleChild from './ScheduleChild'

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barStatus: 0,
    }
  }

  setBars(index) {
    this.setState({
      barStatus: index
    })
  }

  render() {
    const statusArr = this.props.statusArr;
    let barspos = '';
    const BarItems = statusArr.map((v, index) => {
      switch(index) {
        case 0:
          barspos = 'bars-l';
          break;
        case 1:
          barspos = 'bars-c';
          break;
        case 2:
          barspos = 'bars-r';
          break;
      };
      return (
        <div key={index.toLocaleString()} className={`bars-item ${barspos} ${this.state.barStatus === index ? 'active' : ''}`} onClick={() => this.setBars(index)}></div>
      );
    });
    const StatusItems = statusArr.map((v, index) => 
      <ScheduleChild key={index.toLocaleString()} status={v} />
    );
    return (
      <div className="schedule">
        <div className="schedule-bars">
          {BarItems}
        </div>
        <div className="schedule-status">
          {StatusItems}
        </div>
      </div>
    )
  }
}

export default Schedule