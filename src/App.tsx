import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components';
import Constructora from './pages/Constructora';
import Piscinas from './pages/Piscinas';
import FormContact from './components/FormContact';
import { Cortinas } from './pages/Cortinas';
import { CortinasToldos } from './pages/CortinasToldos';
import { CortinasSunscreen } from './pages/CortinasSunscreen';
import { CortinasCerramientos } from './pages/CortinasCerramientos';
import { CortinasCubrePileta } from './pages/CortinasCubrePileta';
import { CortinaBlackout } from './pages/CortinaBlackout';
import { CortinaSistemaDoble } from './pages/CortinaSistemaDoble';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Constructora />} />
                <Route path="/piscinas" element={<Piscinas />} />
                <Route path="/cortinas" element={<Cortinas />} />
                <Route path="/contact" element={<FormContact />} />
                <Route path="/toldos" element={<CortinasToldos />} />
                <Route path="/sunscreen" element={<CortinasSunscreen />} />
                <Route
                    path="/cerramientos"
                    element={<CortinasCerramientos />}
                />
                <Route path="/zebra" element={<CortinasCubrePileta />} />
                <Route path="/blackout" element={<CortinaBlackout />} />
                <Route path="/sistemaDoble" element={<CortinaSistemaDoble />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
