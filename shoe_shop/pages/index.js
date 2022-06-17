import Banner from "../components/Banner"
import Products from "../components/Products"
import { BASE_URL } from "../constants"




export default function Home({products}) {
  console.log(products)

  return (
    <div className="main-container">

      <Banner />
      <Products products={products} /> 
 
    </div>
  )
}

export const getServerSideProps = async() => {
  const products = await (await fetch(`${BASE_URL}`)).json()
  return {props: {products}}
}