import React, { useEffect, useState } from 'react';
import LeftPanelRow from './LeftPanelRow';
import './LeftPanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { count } from '../redux/actions/taskAction';
function LeftPanel() {
  const dispatch = useDispatch();
  const { counts } = useSelector((state) => state.tasks);
  const [c, setc] = useState(counts);
  useEffect(() => {
    dispatch(count());
  }, []);

  useEffect(() => {
    setc(counts);
  }, [counts]);
  return (
    <div className='leftPanelWrapper'>
      <div>
        <LeftPanelRow name='Today' icon='Today' />
        <LeftPanelRow name='Tomorrow' />
        <LeftPanelRow name='OverDue' />
        <hr />
        <LeftPanelRow name='Personal' number={c?.personal} />
        <LeftPanelRow name='Home' number={c?.home} />
        <LeftPanelRow name='Office' number={c?.office} />
      </div>
    </div>
  );
}
export default LeftPanel;
