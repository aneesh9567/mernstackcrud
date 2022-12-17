//import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Codeforcrud from './components/Codeforcrud';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
       <Routes>
         <Route path='/' element={<Codeforcrud/>} />
         <Route path='/all' element={<AllUsers/>} />
         <Route path='/add' element={<AddUser/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
