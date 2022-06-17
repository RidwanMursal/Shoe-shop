import Products from "../../components/Products"
import capitalize from "../../helper_files"
import {BASE_URL} from "../../constants.js"
import { useState, useEffect } from "react"
import {BsCheckAll} from "react-icons/bs"
import {GiRunningShoe, GiConverseShoe, GiBasketballBall} from "react-icons/gi"


const shoeTypeQuery = async (e, setProductsState, setTypeStates, category) => {
  const typeParam = e.target.dataset.shoetype
  let selection = ""
  if (typeParam !== "all") {
    selection = `&&type=${typeParam}`
  }
  const response =  await (await fetch(`${BASE_URL}?category=${category}${selection}`)).json()
  setProductsState(response)
  setTypeStates(typeParam === "all" ? "" : typeParam)
  return
}

const Category = ({products, category}) => {
  //console.log("this is the data from the db", products)
  const [pState, setPState] = useState(products)
  const [typeState, setTypeState] = useState("")
  //console.log("this is the state variable", products)

  // Using use effect to get past the next.js stale reference bug with dynamic routes
  useEffect(() => {
    setPState(products)
    setTypeState("")
  }, [products])


  return (
    <>
      
      <h2 id="category-header">{capitalize(category) + " " + typeState} shoes</h2>
      <div className="category-container">
        <div className="category-nav">
        <button onClick={(e) => shoeTypeQuery(e,setPState,setTypeState,category)} data-shoetype="all" className={typeState===""? "category-nav-button highlighted":"category-nav-button"}><BsCheckAll /> All Shoes</button>
          <button onClick={(e) => shoeTypeQuery(e,setPState,setTypeState,category)} data-shoetype="basketball" className={typeState==="basketball"? "category-nav-button highlighted":"category-nav-button"}><GiBasketballBall /> Basketball Shoes</button>
          <button onClick={(e) => shoeTypeQuery(e,setPState,setTypeState,category)} data-shoetype="running" className={typeState==="running"? "category-nav-button highlighted":"category-nav-button"}><GiRunningShoe /> Running Shoes</button>
          <button onClick={(e) => shoeTypeQuery(e,setPState,setTypeState,category)} data-shoetype="casual" className={typeState==="casual"? "category-nav-button highlighted":"category-nav-button"}><GiConverseShoe/> Casual Shoes</button>
        </div>
    
       
        <Products products={pState} /> 
        
      </div>
    </>
  
  )

}

// export const getStaticPaths = async () => {
//   // const products = await (await fetch(`http:localhost:5050/products?category=${category}`)).json()

//   // const paths = products.map((product) => ({
//   //     params: {
//   //         slug: product.slug.current
//   //     }
//   // }))

//   return {
//       paths: [{params: {category: "mens"}}, {params: {category: "womens"}}, {params: {category: "kids"}}], 
//       fallback: "blocking"
//   }
// }

// export const getStaticProps = async ({params: {category}}) => {
//     const products = await (await fetch(`http:localhost:5050/products?category=${category}`)).json()
//     return {props: {products, category}}
// }

export const getServerSideProps = async ({params: {category}}) => {
  const products = await (await fetch(`${BASE_URL}?category=${category}`)).json()
  return {props: {products, category}}
}

export default Category