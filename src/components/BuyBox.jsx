//stars: recebe o numero de estrelas, de 1 a 5
const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children, children2 }) => {

    let valorPreco = {};

    if (priceDiscount == undefined) {
        valorPreco = {
            fontSize: "32px",
            color: "var(--dark-gray-2)"
        }
    } else {
        valorPreco = {
            fontSize: "16px",
            color: "var(--light-gray-2)",
            textDecoration: "line-through"
        }
    }

    return (

        <div className="p-2 mx-1 d-flex flex-column gap-2">
            <h3 style={{ fontSize: "32px", color: "var(--dark-gray)" }}>{name}</h3>

            <span style={{ fontSize: "12px", color: "var(--dark-gray-3)" }}>{reference}</span>

            <div className="d-flex gap-2">

                <div className="d-flex gap-2 px-2" style={{ borderRadius: '4px', backgroundColor: 'var(--warning)' }}>
                    <p style={{ fontSize: '14px' }} className="text-white fw-bold align-self-center">{stars}</p>
                    <i className="bi bi-star"></i>
                </div>

                <div>
                    <span style={{ fontSize: '14px', color: 'var(--light-gray)' }}>{rating}</span>
                </div>

            </div>

            <div>
                <span style={valorPreco}>{price}</span>
                <span style={{ fontSize: '32px', color: "var(--dark-gray-2)" }}>{priceDiscount}</span>
            </div>

            <div>
                <p style={{ fontSize: "14px", color: "var(--dark-gray-2)" }}>
                    {description}
                </p>
            </div>


            <div>
                <div className="d-flex flex-column gap-1">
                    {children}
                    {children2}
                </div>
            </div>

            <div className="d-inline-flex">
                <button className="btn btn-warning text-white fw-bold">Comprar</button>
            </div>

        </div>
    );
}

export default BuyBox;