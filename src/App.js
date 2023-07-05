import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css';
import Protected from './components/Protected'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <div>                              
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Protected Child={Login}/>}/>
        <Route path='/home' element={<Protected Child={Home}/>}/>
        <Route path='/profile' element={<Protected Child={Profile}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
