import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("PRODUCTS")) || [])
  return (
    <ProductContext.Provider value={[products , setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context