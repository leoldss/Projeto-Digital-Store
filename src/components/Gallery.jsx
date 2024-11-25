//className: usado para passar nome de classes CSS para o elemento que estiver como pai de todos os outros elementos da galeria
//width: recebe um valor para definir a largura que o slide de imagens deve ser renderizado. Exemplo: <Gallery width="1440">
//height: recebe um valor para definir a altura que o slide de imagens deve ser renderizado. Exemplo: <Gallery height="681">
//radius: recebe uma strig indicando o valor em pixel do arredondamento das bordas da imagem. Exemplo: <Gallery radius="4px">
//showThumbs: não recebe valor nenhum, quando essa propriedade existir, o componente deve exibir as imagens em miniaturas (com 117px de largura por 95px de altura) na parte inferior do slide de imagens. Caso a propriedade showthumbs não estiver presente, nenhuma miniatura das imagens deve ser exibida. O valor do atributo radius deve ser aplicado para arredondar as bordas das imagens em miniaturas.
//images:propriedade deve receber como valor um array do objeto com as imagens.[{id='1':src="..."}]

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {

    return (
        <section className={className} style={{ 'width': { width }, 'height': { height }, 'borderRadius': { radius } }}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                {/* thumbs */}
                <div className="carousel-indicators">
                    {images.map((x) => (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={x.id} className={x.id == 0 ? "active" : undefined} aria-current={x.id == 0 ? "true" : undefined} aria-label={`Slide ${x.id}`}></button>
                    ))}

                </div>
                {/* ---x--- */}

                {/* imagens */}
                <div className="carousel-inner">
                    {images.map((x) => (
                        <div className={`carousel-item ${x.id == 0 ? 'active' : undefined}`} >
                            <img key={x.id} src={x.src} className="d-block w-100" alt="..." />
                        </div>
                    ))}
                </div>
                {/* ---x--- */}

                {/* botões de avançar e voltar */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                {/* ---x--- */}
            </div>
        </section>
    );
}

export default Gallery;