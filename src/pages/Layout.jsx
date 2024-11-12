import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return ( 
        <div>
            {/* COMPONENTE DO CABEÇALHO */}
            <Header />
            {/* CONTEÚDO DINÂMICO DA PÁGINA */}
            {children}
            {/* COMPONENTE DO RODAPÉ */}
            <Footer />
        </div>
     );
}
 
export default Layout;