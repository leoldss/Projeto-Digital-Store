//classTitle & classContent: estilos para a caixa de titulo e de conteudos children

//title: recebe uma string
//titleAlign: recebe 'left' ou 'center', left é valor padrão
//link: recebe objeto , no moldelo: {'text': 'x', 'href':'x'}
//children: todos os elementos filhos da tag
const Section = ({title, titleAlign = "left", link, children }) => {

    const tituloDirecao = titleAlign === "left" ? "justify-content-start" : "justify-content-end";

    return (
        <section className="m-3">
            <div className={`d-flex flex-row w-100`}>
                {/* titulo */}
                <div className={`w-50 d-flex ${tituloDirecao}`}>
                    <h2 style={{ color: 'var(--dark-gray-2) ', fontSize: '24px' }}>
                        {title}
                    </h2>
                </div>
                {/* link */}
                <div className="d-flex justify-content-end w-50">
                    {link && (<a href={link.href} target="_blank" style={{ color: 'var(--primary)', fontSize: '18px' }} rel="noopener noreferrer">{link.text}</a>)}
                </div>

            </div>
            <div className={`section-content d-flex gap-3 m-2 `}>
                {children}
            </div>
        </section>
    );
}

export default Section;