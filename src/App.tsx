import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, ScrollToTop } from './components';

const Constructora = lazy(() => import('./pages/Constructora'));
const Piscinas = lazy(() => import('./pages/Piscinas'));
const FormContact = lazy(() => import('./components/FormContact'));

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Nav />
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Constructora />} />
                    <Route path="/piscinas" element={<Piscinas />} />
                    <Route path="/contact" element={<FormContact />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
