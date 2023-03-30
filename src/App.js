import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Protect from './components/Protect';
import Profi from './components/profi';
import Navbar from './components/navbar';


function App() {
  return (
   <BrowserRouter>
    <div className="App">      
      <Routes>

        <Route path="/" element={<Signup/>}/>

        <Route path="/login" element={<Login/>}/>

        {/* <Route path="/home" element={ <Protect child={<Navbar/>}/> }/> */}
        <Route path="/home" element={ <Protect child={<Dashboard/>}/> }/>

        {/* <Route path="/profile" element={ <Protect child={<Profile/>}/> }/> */}
        <Route path="/profile" element={ <Protect child={<Profi/>}/> }/>

      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
