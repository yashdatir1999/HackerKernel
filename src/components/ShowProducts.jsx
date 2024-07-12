import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const ShowProducts = () => {
    const [products, setProducts] = useContext(ProductContext)
    const [searchProduct, setsearchProduct] = useState("")

    const filterProducts = products.filter((product)=>
        product.productName.toLowerCase().includes(searchProduct.toLowerCase())
        // console.log(product.productName)
    )
    const deleteHandler = (idx)=>{
        const copyProducts = [...products]
        copyProducts.splice(idx,1)
        setProducts(copyProducts)
        localStorage.setItem("PRODUCTS",JSON.stringify(copyProducts))
    }
  return (
    <>
        <h1>Product List</h1>
        <input 
            type="text" 
            placeholder='Search Product Name...' 
            value={searchProduct}
            onChange={(e)=>setsearchProduct(e.target.value)}
        />
        {
            (filterProducts.length === 0) ?
            <p>No Product Found</p> :
            <>
            {filterProducts.map((product , idx)=>(
                <ul key={idx}>
                    <li>{product.productName}</li>
                    <li>{product.productPrice}</li>
                    <Link to={`/home/EditProduct/${idx}`}>🖌</Link>
                    <li onClick={()=>deleteHandler(idx)}>❌</li>
                </ul>
            ))}
            
            </> 
        }
    </>
  )
}

export default ShowProducts