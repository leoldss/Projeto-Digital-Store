import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div></div>
            <div className="mx-4">
                {/* COMPONENTE DO CABEÇALHO */}
                <Header />
                {/* CONTEÚDO DINÂMICO DA PÁGINA */}
                <Outlet />
                {/* COMPONENTE DO RODAPÉ */}
                <Footer />
            </div>
            <div></div>
        </div>

    );
}

export default Layout;