import Logo from './Logo'
//exportar imagem de carrinho
import MiniCart from '../assets/mini-cart.svg'

const Header = () => {
    return (
        <header>

            <div className='d-flex flex-row gap-4 m-4'>
                <Logo />
                <div className="input-group input-group-lg">
                    <input type="search" className="form-control" placeholder="Pesquisar Produto..."/>
                    <span className="input-group-text"><i class="bi bi-search"></i></span>
                </div>
                <div className='d-flex my-2 gap-2'>
                    <button href="#" className='btn btn-link text-nowrap'>Cadastre-se</button>
                    <button type='button' className='btn btn-primary px-4'>Entrar</button>
                </div>
                <div className='my-auto mx-4'>
                    <img src={MiniCart} alt="icone carrinho de compras" />
                </div>
            </div>

        </header>
    );
}

export default Header;