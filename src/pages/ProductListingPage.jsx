import FilterComponent from "../components/FilterComponent";

const ProductListingPage = () => {

    return (

        <div>
            <section className="m-4">
                <select className="form-select" aria-label="Default select example" style={{ width: '308px', height: "60px" }}>
                    <option disabled selected>Ordenar por:</option>
                    <option value="1">Menor preço</option>
                    <option value="2">Maior preço</option>
                </select>
            </section>

            <section>
                <FilterComponent />
            </section>
        </div>



    );
}

export default ProductListingPage;