import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
            {/* COMPONENTE DO CABEÇALHO */}
            <Header />
            {/* CONTEÚDO DINÂMICO DA PÁGINA */}
            <Outlet />
            {/* COMPONENTE DO RODAPÉ */}
            <Footer />
        </div>
     );
}
 
export default Layout;