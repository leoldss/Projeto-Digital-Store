//title : (str) titulo do componente
//inputType: verifica se valor é 'radio' ou 'chackbox'
/*options:(array)  recebe como valor um array de objetos seguindo o seguinte padrão
  [
    {"text": "Options 1", "value": "opt1"}
    {"text": "Options 2"}
    {"text": "Options 3", "value": "opt3"}
    {"text": "Options 4"}
  ]*/
const FilterGroup = ({title,inputType,options}) => {

    return ( 
        <>
            <h3>{title}</h3>
            {options.map((opcao)=>(
                <div>
                    <label key={opcao.id} htmlFor={opcao.id}>{opcao.text}</label>
                    <input type={inputType} id={opcao.id} name={inputType == 'radio'? 'opcao' : opcao.value} value={opcao.value}/>
                </div>
            ))}
        </>
     );
}
 
export default FilterGroup;