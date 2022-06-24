import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const findAll = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/findall');
      dispatch({
        type: 'findAll',
        payload: res.data,
      });
      toast.success('Task Inserted.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const find = (para) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/tasks/' + para);
      dispatch({
        type: 'findAll',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const insert = (data) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/insert', data, config);
      dispatch({ type: 'insert', payload: res.data });
      toast.success('Task Inserted.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log('Task Inserted');
    } catch (err) {
      toast.error('Some error occurred. Try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(err);
    }
  };
};

export const count = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/count');
      dispatch({
        type: 'count',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateTask = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/changeDone', data, config);
      dispatch({
        type: 'updateTask',
      });
    } catch (err) {
      console.log(err);
      toast.error('Some error occured!');
    }
  };
};

export const updateActive = (val) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'updateActive',
        payload: val,
      });
    } catch (err) {
      console.log(err);
      toast.error('Some error occured!');
    }
  };
};
