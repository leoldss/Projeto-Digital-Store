//logo para o footer
import { LogoNoFooter } from "./Logo";
//icones facebook, instagram e twitter
import iconFacebook from '../assets/facebook.svg';
import iconInstagram from '../assets/instagram.svg';
import iconTwitter from '../assets/twitter.svg';
//informações no rodapé
import FooterInformations from "./FooterInformations";


const Footer = () => {
    {/* array com TITULOS DO FOOTER */ }
    const titulo = ["Informação", "Categorias", "Contato"];
    /* ARRAY DE OBJETOS */
    const box01 = [{ "text": "Sobre Drip Store", "link": "/about" }, { "text": "segurança", "link": "/security" }, { "text": "Wishlist", "link": "/wishlist" }, { "text": "Blog", "link": "/blog" }, { "text": "Trabalhe conosco", "link": "/trabalhe-conosco" }, { "text": "Meus Pedidos", "link": "/cart" }];

    const box02 = [{ "text": "Camisetas", "link": "/camisetas" }, { "text": "Calças", "link": "/calcas" }, { "text": "Bonés", "link": "/bones" }, { "text": "HeadPhones", "link": "/headphones" }, { "text": "Tênis", "link": "/tenis" }];

    const box03 = [{ "text": "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", "link": "/#" }, { "text": "(85)3061-3411", "link": "/#" }]



    return (
        <footer>
            <div className="d-inline-flex my-5 mx-4 py-3 gap-5">

                {/* primeira box do rodapé */}
                <div className="d-inline-flex flex-column justify-content-start gap-4">
                    <LogoNoFooter />
                    <div >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cum nihil accusantium optio nam sit, consequatur odio, nesciunt.</p>
                    </div>
                    {/* ICONES DO RODAPÉ */}
                    <div className="d-inline-flex flex-row gap-5">
                        <a href="#"><img src={iconFacebook} alt="icone do facebook" /></a>
                        <a href="#"><img src={iconInstagram} alt="icone do Instagram" /></a>
                        <a href="#"><img src={iconTwitter} alt="icone do Twitter" /></a>
                    </div>
                </div>

                {/* segunda box do rodapé */}
                <div className="mx-5 d-inline-flex flex-column gap-2">
                    <FooterInformations title={titulo[0]} informations={box01} />
                </div>

                {/* terceira box do rodapé */}
                <div className="mx-5 d-inline-flex flex-column gap-2">
                    <FooterInformations title={titulo[1]} informations={box02} />
                </div>

                {/* quarta box do rodapé */}
                <div className="mx-5 d-inline-flex flex-column gap-2">
                    <FooterInformations title={titulo[2]} informations={box03} />
                </div>

            </div>

            <div className="w-100">
                <hr />
                <p className="text-center pb-3">© 2024 Digital Store</p>
            </div>
        </footer>
    );
}

export default Footer;