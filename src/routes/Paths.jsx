import { BrowserRouter,HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import Category from '../pages/Category';

const Paths = () => {
    return (
        <>
            <HashRouter >
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/produto-lista' element={<ProductListingPage />} />
                        <Route path='/produto-pagina' element={<ProductViewPage />} />
                        <Route path='/categoria' element={<Category />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
}

export default Paths;