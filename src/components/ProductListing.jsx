import ProductCard from "./ProductCard";

//recebe listas de produtos para renderizar no productcard
const ProductListing = ({products}) => {
    
    return ( 
        <div className="">
            {/* props do productCard => image(str), name(str), price(number), PriceDiscount(number) */}
            {/* pricediscount é verificado se é diferente de indefinido ou não */}
            {products.map((product,index)=>(<ProductCard key={index} image={product.image} name={product.name} price={product.price} PriceDiscount={product.priceDiscount !== undefined ? product.priceDiscount:undefined}/>))}
        </div>
     );
}
 
export default ProductListing;