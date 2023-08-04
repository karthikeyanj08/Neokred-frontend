import '../src/Style/App.css';
import './Pages/UserLogin'
import UserLogin from './Pages/UserLogin';
import Register from './Pages/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes>

        <Route index path='/' element ={<Register/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
      
      
      
      </BrowserRouter>
       </>
      
      
      
    </div>
  );
}

export default App;
