import './App.css';
import store from './redux/store';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftPanel />
          <MiddlePanel />
        </div>
      </div>
    </Provider>
  );
}

export default App;
