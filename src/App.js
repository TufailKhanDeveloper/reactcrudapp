import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <>
    <div className="container">
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
