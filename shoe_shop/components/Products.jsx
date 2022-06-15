import Product from "./Product"
const Products = ({products}) => {
  //console.log("this is x", products)

  if (products.length === 0) {
    return (
      <div className="nothing-found-container">
        <h1>No Results Found</h1>
      </div>
      
    )
  }
  
  return (
    <div className="products-container">
      {products.map(product => <Product key={product.id} product={product}/>)}
    </div>
  )
}

export default Products
