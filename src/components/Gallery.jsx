
//className: usado para passar nome de classes CSS para o elemento que estiver como pai de todos os outros elementos da galeria
//width: recebe um valor para definir a largura que o slide de imagens deve ser renderizado. Exemplo: <Gallery width="1440">
//height: recebe um valor para definir a altura que o slide de imagens deve ser renderizado. Exemplo: <Gallery height="681">
//radius: recebe uma strig indicando o valor em pixel do arredondamento das bordas da imagem. Exemplo: <Gallery radius="4px">
//showThumbs: não recebe valor nenhum, quando essa propriedade existir, o componente deve exibir as imagens em miniaturas (com 117px de largura por 95px de altura) na parte inferior do slide de imagens. Caso a propriedade showthumbs não estiver presente, nenhuma miniatura das imagens deve ser exibida. O valor do atributo radius deve ser aplicado para arredondar as bordas das imagens em miniaturas.
//images:propriedade deve receber como valor um array do objeto com as imagens.[{id='1':src="..."}]

const Gallery = ({ className, width, radius, showThumbs, images, menuOption }) => {

    return (
        <div id="carouselExample" className={`carousel slide ${width}`} style={{ borderRadius: `${radius}px` }} >

            {/* IMAGENS */}
            <div className={`carousel-inner `}>
                {images.map((imag) => (

                    <div key={imag.id} className={`carousel-item ${images.indexOf(imag) == 0 ? 'active' : undefined}`} >

                        <div className="position-relative w-100 h-100">
                            {menuOption === true ?
                                <div className="position-absolute top-0 start-0 m-5 p-5" style={{ backgroundColor: "rgba(245,245,245,0.4)", borderRadius: "50px" }}>
                                    <h3 style={{ color: "#f6b337" }}>Melhores ofertas personalizadas</h3>
                                    <h2 style={{ fontSize: "70px", fontWeight: 'bold' }}>Queima de <br /> stoque Nike 🔥</h2>
                                    <p>Consequat culpa exercitation mollit nisi excepteur do<br /> do tempor laboris eiusmod irure consectetur.</p>
                                    <button type='button' className='btn btn-primary'>Ver Ofertas</button>
                                </div>
                                : undefined}

                            <img src={imag.src} className="d-block" style={{ objectFit: "cover" }} alt={`imagem do banner ${imag.id}`} />

                        </div>
                    </div>
                ))}
            </div>
            {/* -----x----- */}


            {/* CONTROLADORES */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            {/* -----x----- */}


        </div>
    );
}

export default Gallery;