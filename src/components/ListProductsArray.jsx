import imagem01 from "../assets/img/product-image.jpg"

const ListProductArray = () => {

    function listagemProdutos() {

        const produtos = [
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            },
            {
                name: "Nome do produto 1",
                image: imagem01,
                price: 200,
                priceDiscount: 149.9
            },
            {
                name: "Nome do produto 2",
                image: imagem01,
                price: 49.9
            }
        ]

    }

    return (
        <div>
            {listagemProdutos()}
        </div>
    );
}

export default ListProductArray;