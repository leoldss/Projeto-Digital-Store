import {NavLink} from 'react-router-dom';

const Nav = () => {
    return ( 
        
            <ul className='d-inline-flex gap-4 justify-content-start mx-0' style={{listStyle:'none'}}>
                <li><NavLink to={"/"} className='nav-link'>Home</NavLink></li>
                <li><NavLink to={"/produto-lista"} className='nav-link'>Produtos</NavLink></li>
                <li><NavLink to={"/categoria"} className='nav-link'>Categorias</NavLink></li>
                <li><NavLink to={"/produto-pagina"} className='nav-link'>Meus Pedidos</NavLink></li>
            </ul>
     );
}
 
export default Nav;