
//image : recebe caminho para a imagem : str
//name : recebe titulo da imagem : str
//price : preço : float
//(opcional)priceDiscount : se tiver desconto corta o preço original e mostra este novo : float
const ProductCard = ({ image, name, price, PriceDiscount }) => {

    return (
        <div className="d-inline-flex flex-column p-2">

            <img src={image} alt="imagem do card" style={{width:'292px',height:'321px'}} />
            <h3 style={{fontSize:'24px',color:"var(--dark-gray-2)"}}>{name}</h3>

            <div className="d-flex flex-row justify-content-between p-2">
                {/* valor price - ESTILIZAÇÃO NO APP.CSS */}
                {/* MUDA ESTILIZAÇÃO DE ACORDO SE O VALOR DO 'PRICEDISCOUNT' FOI PASSADO */}
                <p className={`${PriceDiscount?'price-riscado':'price-normal'}`}>{price}</p>

                {/* ficara oculta se não tiver valor priceDiscount */}
                <p style={{color:'var(--dark-gray)',fontSize:'24px'}}>{PriceDiscount}</p>
            </div>

        </div>
    );
}

export default ProductCard;