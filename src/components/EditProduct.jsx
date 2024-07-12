import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const navigate = useNavigate()
    const {idx} = useParams()
    const [products, setProducts] = useContext(ProductContext)

    const [product, setProduct] = useState({
        productName: products[idx].productName,
        productPrice: products[idx].productPrice,
        
    })
    const changeHandler = (e)=>{
        const copyProduct = {...product}
        copyProduct[e.target.name] = e.target.value
        setProduct(copyProduct)
    }

    const submitHandler = (e)=>{
        e.preventDefault()

        const editProducts = {productName: product.productName , productPrice: product.productPrice}

        const copyProduct = [...products]
        copyProduct[idx] = editProducts
        setProducts(copyProduct)
        
        localStorage.setItem("PRODUCTS", JSON.stringify(copyProduct))

        navigate(-1)

    }
  return (
    <>
        <form onSubmit={submitHandler}>
        <div>
        <label className="font-medium text-xl mr-2">Product Name :- </label>
        <input 
            type="text" 
            name='productName' 
            placeholder='Product Name' 
            value={product.productName}
            onChange={changeHandler} 
        />
        </div>

        <div>
        <label className="font-medium text-xl mr-2">Product Price :- </label>
        <input 
            type="number" 
            name='productPrice' 
            placeholder='Product Price' 
            value={product.productPrice}
            onChange={changeHandler}
        />
        </div>
        <button>Edit Product</button>
    </form>
    </>
  )
}

export default EditProduct