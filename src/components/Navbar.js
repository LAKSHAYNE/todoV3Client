import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {
  ToggleButtonGroup,
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { count, find, insert } from '../redux/actions/taskAction';
import Modal from 'react-modal';
function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(find('personal'));
  }, []);
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgb(0, 0, 0, 0.4)',
      zIndex: 1000,
      textAlign: 'center',
      justifyContent: 'center',
    },
    content: {
      zIndex: 1000,
      width: '35%',
      left: '34%',
      fontWeight: '400',
      top: '20%',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      textAlign: 'start',
    },
  };
  const data = {};
  const [alignment, setAlignment] = React.useState('web');
  const [desc, setdesc] = useState('');
  const [time, settime] = useState('');
  const [tags, settags] = useState('');
  const handleChange = (e) => {
    const newAlignment = e.target.value;
    setAlignment(newAlignment);
    settags(newAlignment);
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function submitted() {
    closeModal();
    data.des = desc;
    data.time = new Date(time);
    data.category = tags;
    data.done = false;
    dispatch(insert(data));
    dispatch(find(data.category));
    dispatch(count);
    return;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='navCon'>
      <form>
        <Modal
          preventScroll={true}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyle}
          ariaHideApp={false}
        >
          <div className='modal__container'>
            <p style={{ fontSize: 20 }}>Add Task</p>
          </div>
          <div className='feildsWrapper'>
            <div className='modalFeilds'>
              <p>What are you upto?</p>
              <input
                onChange={(e) => setdesc(e.target.value)}
                style={{
                  borderWidth: 1,
                  borderRadius: '5px',
                  borderColor: 'blue',
                }}
                type='text'
                placeholder='Brief text what you want to accomplish.'
                name='taskDesc'
              />
            </div>
            <div className='modalFeilds'>
              <p>When do you want to complete it?</p>
              <input
                onChange={(e) => settime(e.target.value)}
                style={{
                  borderWidth: 1,
                  borderRadius: '5px',
                  borderColor: 'blue',
                }}
                type='text'
                placeholder='Date in YYYY-MM-DD'
                name='taskTime'
              />
            </div>
            <div className='tags'>
              <p>Tags</p>
              <ToggleButtonGroup
                variant='contained'
                color='success'
                value={alignment}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton
                  style={{ borderColor: '#2A0A74' }}
                  value='personal'
                >
                  Personal
                </ToggleButton>
                <ToggleButton style={{ borderColor: '#2A0A74' }} value='home'>
                  Home
                </ToggleButton>
                <ToggleButton style={{ borderColor: '#2A0A74' }} value='office'>
                  Office
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className='endButton'>
              <div style={{ display: 'flex' }}>
                <Button
                  variant='contained'
                  onClick={closeModal}
                  style={{
                    margin: '2px',
                    width: '100%',
                    height: '100%',
                    borderRadius: 6,
                    backgroundColor: '#2A0A74',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  style={{
                    margin: '2px',
                    width: '100%',
                    height: '100%',
                    borderRadius: 6,
                    backgroundColor: '#2A0A74',
                  }}
                  onClick={submitted}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </form>
      <div className='content'>
        <div className='logo'>
          <img
            style={{ height: 49 }}
            src={
              'https://www.coolgenerator.com/Data/Textdesign/202206/f50801b5854c105fc8450af5965c111d.png'
            }
          />
        </div>
        <div className='inputCon'>
          <TextField
            variant='standard'
            className='input'
            fullWidth
            style={{ alignItems: 'center', justifyContent: 'start' }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className='right'>
          <Button
            onClick={openModal}
            startIcon={<AddIcon />}
            variant='contained'
            style={{
              height: '100%',
              borderRadius: 6,
              backgroundColor: '#2A0A74',
            }}
          >
            New Task
          </Button>
          <div className='profile'>
            <img
              className='imgprofile'
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8k0D-987FvNV_2cIQZQBXCoantbhnS5r5g&usqp=CAU'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
