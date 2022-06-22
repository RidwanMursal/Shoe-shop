import React from 'react'
import Link from "next/link"

const DashboardEntry = ({entry, onDelete, products, setProducts}) => {
  //console.log(console.slug)
  return (
    
    <div className="database-entry">
        <p className="database-entry-name">{entry.productName}</p>
        <div className="btns-container">
            <Link href={`/productEntry/edit/${entry.productSlug}`}>
                <button className="database-entry-edit-btn">Edit</button>
            </Link> 
            <button className="database-entry-edit-btn" onClick={() => onDelete(entry._id, products, setProducts)}>Delete</button>
        </div>
    </div>
    
  )
}

export default DashboardEntry