import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {

  return (
   <>
    <NavBar/>
    

      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<ItemListContainer saludo={'Bienvenidos'}></ItemListContainer>}/>
          <Route path='/categoria/:id' element = {<ItemListContainer saludo={'Bienvenidos'}></ItemListContainer>}/>
          <Route path='/productos/detalle/:id' element = {<ItemDetailContainer/>}/>
          
        </Routes>
      
      </BrowserRouter>




   </>

  );
}

export default App;
