import React from 'react';
import './LeftPanelRow.css';
import TodayIcon from '@mui/icons-material/Today';
import ListIcon from '@mui/icons-material/List';
import { useDispatch, useSelector } from 'react-redux';
import { updateActive } from '../redux/actions/taskAction';
function LeftPanelRow({ name, icon, number }) {
  const dispatch = useDispatch();
  function handle() {
    const n = name.toLowerCase();
    if (n == 'today' || n == 'tomorrow' || n == 'overdue') {
      dispatch(updateActive('all'));
    } else {
      dispatch(updateActive(name.toLowerCase()));
    }
  }
  return (
    <div onClick={handle} className='row'>
      <div className='icon'>{icon ? <TodayIcon /> : <ListIcon />}</div>
      <div className='name'>
        <p>{name}</p>
      </div>
      <div className='number'>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default LeftPanelRow;
