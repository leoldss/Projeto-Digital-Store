import FilterComponent from "../components/FilterComponent";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

import imagem01 from "../assets/img/product-image.jpg"

const ProductListingPage = () => {
    //array com objetos
    const listProductArray = [
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: imagem01,
            price: 49.9
        }
    ];

    return (

        <div style={{ backgroundColor: "#F9F8FE" }} className="p-2">
            <section className="m-2">
                <label htmlFor="selecao-filtragem">Ordenar por: </label>
                <select id="selecao-filtragem" className="form-select" aria-label="Default select example" style={{ width: '308px', height: "60px" }}>
                    <option value="1">Menor preço</option>
                    <option value="2">Maior preço</option>
                </select>
            </section>

            <section className="my-2 mx-0 d-flex flex-row">

                {/* CAMPO DE FILTRO */}
                <div>
                    <FilterComponent />
                </div>


                {/* PRODUTOS CARDS */}

                <Section title={`Resultado para tênis : ${listProductArray.length} produtos`} titleAlign="left" children={<ProductListing products={listProductArray} />} />

            </section>
        </div>



    );
}

export default ProductListingPage;