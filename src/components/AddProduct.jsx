import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'

const AddProduct = () => {
  const [products, setProducts] = useContext(ProductContext)
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    if (!productName || !productPrice) {
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

    if (productName && productPrice) {
      const product = { productName, productPrice }
      const copyProduct = [...products]
      copyProduct.push(product)
      localStorage.setItem("PRODUCTS", JSON.stringify(copyProduct))

      setProductName("")
      setProductPrice("")
      
    }
  }
  return (
    <>
      <div className='w-[40%]  flex justify-between items-center '>
        <div className='w-[100%] h-screen  rounded-lg  flex justify-center items-center'>
        <div className='h-[60%] w-[60%] backdrop-blur-md form-bg p-5 rounded-md	add-prdt'>
          <form onSubmit={submitHandler} className='flex flex-col justify-center gap-5'>
          <h1 className="font-mono mb-5 text-3xl text-black-500 text-center	">Add Product</h1>
            
            <input
              type="text"
              name='product'
              placeholder='Product Name'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input" 
            />
            <input
              type="number"
              name='price'
              placeholder='Product Price'
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input" 
            />

            <button className="border-none rounded-md mt-5 py-2 w-40 m-auto btn">Save</button>
        {error && <p className="text-red-700  font-semibold text-xl text-center">{error}</p>}
          </form>
        </div>
        </div>

      </div>
    </>
  )
}

export default AddProduct