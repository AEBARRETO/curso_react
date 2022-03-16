import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
   <>
    <NavBar/>
    <ItemListContainer saludo={'Bienvenidos'}></ItemListContainer>
   </>

  );
}

export default App;
