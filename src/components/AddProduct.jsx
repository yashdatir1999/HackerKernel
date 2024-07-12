import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'

const AddProduct = () => {
    const [products, setProducts] = useContext(ProductContext)
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [error, setError] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()

        if(!productName || !productPrice){
            setError("Product Name & Product Price is Required.")
        }
        if (
            products.some(
              (product) => product.productName.toLowerCase() == productName.toLowerCase()
            )
          ) {
            setError("Product already exists");
            return;
          }

          if(productName && productPrice){
              const product = {productName , productPrice}
              const copyProduct = [...products]
              copyProduct.push(product)
              localStorage.setItem("PRODUCTS" , JSON.stringify(copyProduct))
      
              setProductName("")
              setProductPrice("")
          }
          }
  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
        <label className="font-medium text-xl mr-2">Product Name :- </label>
        <input 
            type="text" 
            name='product' 
            placeholder='Product Name' 
            value={productName}
            onChange={(e)=> setProductName(e.target.value)} 
        />
        </div>

        <div>
        <label className="font-medium text-xl mr-2">Product Price :- </label>
        <input 
            type="number" 
            name='price' 
            placeholder='Product Price' 
            value={productPrice}
            onChange={(e)=>setProductPrice(e.target.value)}
        />
        </div>
        <button>Add Product</button>
    </form>

    {error && <p className="text-red-700 font-semibold text-xl">{error}</p>}
    </>
  )
}

export default AddProduct