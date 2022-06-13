import Banner from "../components/Banner"
import Products from "../components/Products"



export default function Home({products}) {
  console.log(products)

  return (
    <div className="main-container">

      <Banner />
      <div className="products-container">
        <Products products={products} /> 
      </div>
      

      {/* footer banner */}
      
     
    </div>
  )
}

export const getServerSideProps = async() => {
  const products = await (await fetch('http://localhost:5050/products')).json()
  return {props: {products}}
}