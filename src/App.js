import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_container'>
      <div className='app_leftContainer'>
      <SideBar />
      </div>
     <div className='app_centerContainer'>
      <Dashboard />
     </div>
     <div className='app_rightContainer'>
      
     </div>
     </div>
    </div>
  );
}

export default App;
