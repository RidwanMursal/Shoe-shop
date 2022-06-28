import {useState} from 'react'
import Link from "next/link"
import {BASE_URL} from "../../constants.js"
import {GrAddCircle} from "react-icons/gr"
import deleteEntry from "../../utils/dashBoardUtils.js"
import DashBoardEntry from "../../components/DashBoardEntry/DashBoardEntry"



const DashBoard = ({products}) => {
  console.log(products)
  const [productsState, setProducts] = useState(products)
  
  return (
    <div>
        <div className="dashboard-title-container">
            <h2 className="dashboard-title">Dashboard</h2>
        </div>

        <section className="dashboard-section">
            <div className="tables-container">
                {/* can do a query for the amount of tables and dynamically assign this*/}
                <div className="tables-title-container">
                    <h4>Tables</h4> 
                </div>
                <div className="tables-body-container">
                    <h4 id="products-table">Products</h4> 
                    <hr />
                </div>
            </div>

            <div className="database-entries-container">
                <div className="database-entries-title">
                    <h3>Products </h3>
                    <Link href="/productEntry"> 
                        <GrAddCircle size={"1.5rem"} className="database-add-btn" /> 
                    </Link>
                </div>
                <div className="database-entries-body">
                    {productsState?.map(entry => <DashBoardEntry key={entry._id} entry={entry} products={productsState} setProducts={setProducts} onDelete={deleteEntry} /> )}
                </div>
            </div>
        </section>

    </div>
  )
}

export const getServerSideProps = async () => {
    const products =  await ( await fetch(`${BASE_URL}`)).json()
    return {props: {products}}
}

export default DashBoard