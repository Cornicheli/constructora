import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components';
import Constructora from "./pages/Constructora";
import Piscinas from './pages/Piscinas';
import FormContact from './components/FormContact';

const App = () => {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/' element={<Constructora />} />
        <Route path='/piscinas' element={<Piscinas />} />
        <Route path='/contact' element={<FormContact />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;