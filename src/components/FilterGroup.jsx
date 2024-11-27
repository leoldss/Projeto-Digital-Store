//title : (str) titulo do componente
//inputType: verifica se valor é 'radio' ou 'chackbox'
/*options:(array)  recebe como valor um array de objetos seguindo o seguinte padrão
  [
    {"text": "Options 1", "value": "opt1"}
    {"text": "Options 2"}
    {"text": "Options 3", "value": "opt3"}
    {"text": "Options 4"}
  ]*/
const FilterGroup = ({ title, inputType, options }) => {

    return (
        <div className="d-flex flex-column gap-1">

            <h3 style={{ color: "var(--dark-gray-2)", fontSize: "14px" }}>{title}</h3>

            <div>
                {options.map((opcao) => (
                    <div className="d-flex align-items-center gap-2 my-1">
                        <input type={inputType} id={opcao.id} name={inputType == 'radio' ? 'opcao' : opcao.value} value={opcao.text} style={{ width: "22px", height: "22px" }} />
                        <label key={opcao.id} htmlFor={opcao.id} >{opcao.text}</label>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default FilterGroup;