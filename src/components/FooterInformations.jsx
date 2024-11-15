const FooterInformations = ({ title, informations }) => {
    return (
        <>
            <h3>{title}</h3>

            {informations.map((texto) => (
                <a style={{ 'textDecoration': 'none', 'color': '#f5f5f5' }} href={texto.link}>{texto.text}</a>
            ))}

        </>
    );
}

export default FooterInformations;