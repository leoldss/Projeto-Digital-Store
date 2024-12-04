import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

//IMAGES
import product01 from "../assets/img/product-option-01.jpg"
import product02 from "../assets/img/product-option-02.jpg"
import product03 from "../assets/img/product-option-03.jpg"
import product04 from "../assets/img/product-option-04.jpg"
import product05 from "../assets/img/product-option-05.jpg"

import productImage from "../assets/img/product-image.jpg"

{/* quarta aba no nav */ }
const ProductViewPage = () => {

    const product = [
        { "id": "123", "src": product01 },
        { "id": "456", "src": product02 },
        { "id": "789", "src": product03 },
        { "id": "101", "src": product04 },
        { "id": "121", "src": product05 }
    ];

    {/* Lista de tamanhos para o <productOptions /> */ }
    const tamanhos = [
        '39', '40', '41', '42', '43'
    ];
    const cores = [
        "#6eeeff", "#ff6969", "#5d5d5d", "#6d70b7"
    ];

    const valorProductListing = [
        {
            name: "K-Swiss V8 - Masculino",
            image: productImage,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productImage,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productImage,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: productImage,
            price: 49.9
        }
    ];

    return (

        <div style={{ backgroundColor: "#f9f8fe" }}>
            
            <div className="d-inline-flex flex-row">
                <Gallery images={product} width={'w-60'} height={'470'} Gallery={false} />

                <BuyBox name={"Tênis Nike Revolution 6 Next Nature Masculino"} reference={"Casual | Nike | REF:38416711"} stars={4.7} rating={'(80 avaliações)'} price={'210,00'} priceDiscount={"200,00"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'} children={<ProductOptions options={tamanhos} shape="square" />} children2={<ProductOptions options={cores} radius={'50%'} shape="circle" />} />
            </div>

            <div>
                <Section title={"Produtos recomendados"} titleAlign="left" link={{
                    "text": "Ver todos",
                    "href": "/products"
                }} children={<ProductListing products={valorProductListing} />} />
            </div>

        </div>

    );
}

export default ProductViewPage;