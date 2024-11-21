import { Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Menu />
      <div className='container text-center'>
        <Routes>
        {/*   <Route path='/' element={<Inicio></Inicio>} />
          <Route path='/albumes' element={<Albumes></Albumes>} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;

