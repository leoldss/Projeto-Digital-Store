//IMAGENS SLIDE NA HOMEPAGE
import slide1 from '../assets/img/home-slide-1.png';
import slide2 from '../assets/img/home-slide-2.jpeg';
import slide3 from '../assets/img/home-slide-3.jpeg';
import slide4 from '../assets/img/home-slide-4.jpeg';
import slide5 from '../assets/img/home-slide-5.jpeg';
import slide6 from '../assets/img/home-slide-6.jpeg';
import slide7 from '../assets/img/home-slide-7.jpeg';
import slide8 from '../assets/img/home-slide-8.jpeg';

//imagens de coleção
import colecao1 from '../assets/img/collection-1.png';
import colecao2 from '../assets/img/collection-2.png';
import colecao3 from '../assets/img/collection-3.png';

//IMAGENS PRODUTOS
import productThumb1 from '../assets/img/product-thumb-1.jpeg';
import productThumb2 from '../assets/img/product-thumb-2.jpeg';
import productThumb3 from '../assets/img/product-thumb-3.jpeg';
import productThumb4 from '../assets/img/product-thumb-4.jpeg';
import productThumb5 from '../assets/img/product-thumb-5.jpeg';

//COMPONENTS
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from '../components/ProductListing';

//imagem unica coleções em destaque
import colecoes from "../assets/img/colecoes_em_destaque.png"

const HomePage = () => {

    {/* ---------- IMAGENS ---------- */ }
    const imagens = [
        { "id": "0", "src": slide1 },
        { "id": "1", "src": slide2 },
        { "id": "2", "src": slide3 },
        { "id": "3", "src": slide4 },
        { "id": "4", "src": slide5 },
        { "id": "5", "src": slide6 },
        { "id": "6", "src": slide7 },
        { "id": "7", "src": slide8 }
    ]

    const imgColecao = [
        { "id": "0", "src": colecao1 },
        { "id": "1", "src": colecao2 },
        { "id": "2", "src": colecao3 }
    ]

    const imagemProdutos = [
        {
            name: "K-Swiss V8 - Masculino",
            image: productThumb1,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productThumb2,
            price: 49.9
        }, {
            name: "K-Swiss V8 - Masculino",
            image: productThumb3,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productThumb4,
            price: 49.9
        }, {
            name: "K-Swiss V8 - Masculino",
            image: productThumb5,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productThumb1,
            price: 49.9
        }, {
            name: "K-Swiss V8 - Masculino",
            image: productThumb2,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productThumb3,
            price: 49.9
        }
    ];
    {/* ---------- X ---------- */ }

    return (
        <main style={{backgroundColor:"#F9F6FE"}}>
            <Gallery width={"w-100"} images={imagens} menuOption={true} />

            <div>
                {/* sessão de coleção de imagens */}
                <Section title={"Coleções em Destaque"} titleAlign={'center'} children={imgColecao.map(
                    (imagem) => (<img key={imagem.id} src={imagem.src} alt='imagem coleção' />)
                )} />

                <Section title={"Coleções em Destaque"} titleAlign='center' children={<img className='img-fluid d-block mx-auto' src={colecoes} alt='icones de coleções'/>}/>


                {/* Cards com produtos em alta */}
                <Section title={'Produtos em Alta'} titleAlign='left' children={<ProductListing products={imagemProdutos} />} />
            </div>
        </main>
    );
}

export default HomePage;