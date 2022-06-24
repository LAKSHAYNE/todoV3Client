import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './MiddlePanel.css';
import AddIcon from '@mui/icons-material/Add';
import TasksRow from './TasksRow';
import { useDispatch, useSelector } from 'react-redux';
import { find, findAll } from '../redux/actions/taskAction';

function MiddlePanel() {
  const dispatch = useDispatch();
  const { tasks, active } = useSelector((state) => state.tasks);
  //const [task, settask] = useState([]);
  var len = tasks.length;
  useEffect(() => {
    if (active == 'all') {
      dispatch(findAll());
    } else {
      dispatch(find(active));
    }
    len = tasks.length;
  }, [len, active]);

  return (
    <div className='middlePanelWrapper'>
      <h2>{active.toUpperCase()}</h2>
      <div className='inputCo'>
        <TextField
          variant='standard'
          className='inpu'
          fullWidth
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className='tasksList'>
        {tasks.map((item) => (
          <TasksRow
            id={item._id}
            desc={item.des}
            time={item.taskTime}
            done={item.done}
          />
        ))}
      </div>
    </div>
  );
}

export default MiddlePanel;
