import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components';
import Constructora from "./pages/Constructora";
import Piscinas from './pages/Piscinas';

const App = () => {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/' element={<Constructora />} />
        <Route path='/piscinas' element={<Piscinas />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;