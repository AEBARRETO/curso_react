import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';

function App() {
  return (
   <CartContextProvider>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer saludo={'Bienvenidos'}></ItemListContainer>}/>
        <Route path='/categoria/:categoria'  element = {<ItemListContainer/>}/>
        <Route path='/productos/detalle/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
   </CartContextProvider>

  );
}

export default App;
