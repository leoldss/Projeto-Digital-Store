
//options receb um array ex: ["39", "41", "42" ... ]
//radius recebe uma string que define o valor do atributo border-radius quando shape tiver como valor square. Se o shape for circle essa propriedade deve ser ignorada
//shape recebe como valor "square" ou "circle"
//type recebe como valor "text" ou "color"
const ProductOptions = ({ options, radius, shape = "square" }) => {

    function mudancaCorSelecao(){

    }

    return (
        <div className="d-flex flex-column">

            {/* verificação de titulo */}
            {shape === "square" ?
                <h4>Tamanho</h4>
                : <h4>cor</h4>}

            {/* verificação se opções são quadradas ou redondas */}
            <div className="d-flex flex-row gap-3 m-1">
                {shape === "square" ?
                    options.map((content, index) => (
                        <button key={index} className="px-2" style={{ width: 'auto', height: '46px', fontSize: '24px', color: 'var(--dark-gray-2)', border: "1px solid var(--light-gray-2)" }}>{content}</button>
                    ))
                    : options.map((content, index) => (
                        <button key={index} style={{ backgroundColor: content, width: '31px', height: '31px', borderRadius: radius, color: content, border: 'none' }}></button>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductOptions;