import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';

const Paths = () => {
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/produto-lista' element={<ProductListingPage />} />
                        <Route path='/produto-pagina' element={<ProductViewPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;