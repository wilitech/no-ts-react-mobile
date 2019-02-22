import * as  React from 'react';

function ScheduleChild(props) {
  return (
    <div className="status">
      <div className="status-head">{props.status.statusName}</div>
      <div className="status-desc">{props.status.statusDsc}</div>
    </div>
  );
}

export default ScheduleChild