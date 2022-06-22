import React from 'react'

const Input = ({type, name, value, changed, required}) => {
  return (
    <div className="entry">
        <h4 className="label">Product {name.charAt(0).toUpperCase() + name.slice(1)} <span className="required">{required ? "*":null }</span> </h4>
        <input type={type} className="db-entry-field" value={value} name={name} onChange={(e) => changed(e) } onCh />
    </div>
)
}

export default Input