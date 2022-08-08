
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <><Router>
      <Header/>
      <div className='App'>

        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>} />

        </Routes>
      </div>

      </Router>
    
    </>
   
  );
}

export default App;
