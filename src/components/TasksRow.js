import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { count, updateTask } from '../redux/actions/taskAction';
import './TasksRow.css';
function TasksRow({ id, desc, time, done }) {
  const [donee, setdonee] = useState(done);
  const dispatch = useDispatch();
  const changeDone = () => {
    let data = {};
    data.id = id;
    if (donee == false) {
      setdonee(true);
      data.done = true;
      dispatch(updateTask(data));
    } else {
      setdonee(false);
      data.done = false;
      dispatch(updateTask(data));
    }
  };
  return (
    <div id={id} className='taskRowWrapper'>
      <input
        className='checkBox'
        type='checkbox'
        id='topping'
        name='topping'
        value='Paneer'
        checked={donee}
        onClick={changeDone}
      />
      <div className='taskDisc'>
        <p className='disc'>{desc}</p>
        <p className='time'>{time}</p>
      </div>
    </div>
  );
}

export default TasksRow;
