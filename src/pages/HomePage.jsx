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
import colecao1 from '../assets/img/collection-1.png'
import colecao2 from '../assets/img/collection-2.png'
import colecao3 from '../assets/img/collection-3.png'


import Gallery from "../components/Gallery";
import Section from "../components/Section";
 
const HomePage = () => {

    const imagens = [
        { "id": "0", "src": slide1 },
        { "id": "1", "src": slide2},
        { "id": "2", "src": slide3 },
        { "id": "3", "src": slide4 },
        { "id": "4", "src": slide5 },
        { "id": "5", "src": slide6 },
        { "id": "6", "src": slide7 },
        { "id": "7", "src": slide8 }
    ]

    const imgColecao = [
        {"id":"0","src":colecao1},
        {"id":"1","src":colecao2},
        {"id":"2","src":colecao3}
    ]

    return (
        <>
            <Gallery width={"1440px"} height={"681px"} images={imagens}/>

            {/* sessao de coleção de imagens */}
            <Section title={"Coleções em Destaque"} titleAlign={'left'} children={imgColecao.map(
                (imagem)=>(<img key={imagem.id} src={imagem.src} alt='imagem coleção' />)
            )}/>
        </>
    );
}

export default HomePage;