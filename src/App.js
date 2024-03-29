import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './Component/Orders/Orders';
import Inventory from './Component/Inventory/Inventory';


function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shopping' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        </Routes>
    </div>
  );
}

export default App;
