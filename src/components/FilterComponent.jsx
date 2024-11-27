import FilterGroup from "./FilterGroup";

const marks = [
    {"id":"1","text": "Adidas", "value": "opt1"},
    {"id":"2","text": "Balenciaga", "value": "opt2"},
    {"id":"3","text": "S-Swiss", "value": "opt3"},
    {"id":"4","text": "Nike", "value": "opt4"},
    {"id":"5","text": "Puma", "value": "opt5"}
]

const categoria = [
    {"id":"11","text": "Esporte e Lazer", "value": "opt1"},
    {"id":"22","text": "Casual", "value": "opt2"},
    {"id":"33","text": "Utilitário", "value": "opt3"},
    {"id":"44","text": "Corrida", "value": "opt4"}
]

const genero = [
    {"id":"15","text": "Masculino", "value": "opt1"},
    {"id":"26","text": "Feminino", "value": "opt2"},
    {"id":"37","text": "Unissex", "value": "opt3"}
]

const estado = [
    {"id":"18","text": "Novo", "value": "opt1"},
    {"id":"29","text": "Usado", "value": "opt2"},
]

const FilterComponent = ({}) => {
    return ( 
        <aside className="p-4" style={{backgroundColor:"var(--white)",width:"308px",border:"2px solid #000000"}}>

            <h2 style={{fontSize:"16px",color:"var(--dark-gray-2)"}}>Filtrar por</h2>
            <hr style={{color:"var(--light-gray-2)"}}/>

            <div className="d-flex flex-column gap-2">
                {/* Grupos de Filtragem */}
                <FilterGroup title={'Marks'} inputType={'checkbox'} options={marks}/>
                <FilterGroup title={'Categoria'} inputType={'checkbox'} options={categoria}/>
                <FilterGroup title={'Gênero'} inputType={'checkbox'} options={genero}/>
                <FilterGroup title={'Estado'} inputType={'radio'} options={estado}/>
            </div>

        </aside>
     );
}
 
export default FilterComponent;