import Product from "./Product"
const Products = ({products}) => {
  //console.log("this is x", products)

  if (products.length === 0) {
    return (
      <h3>Nothing Found</h3>
    )
  }
  
  return (
    <>
      {products.map(product => <Product key={product.id} product={product}/>)}
    </>
  )
}

export default Products
