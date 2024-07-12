import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
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
    const backHandler = ()=>{
        navigate(-1)
    }
  return (
    
    <div className='home-bg h-screen flex justify-center items-center'>
        <div className='h-[60%] w-[25%] backdrop-blur-md form-bg p-5 rounded-md'>
        <form onSubmit={submitHandler} className='flex flex-col justify-center gap-5 '>
            <p onClick={backHandler} className='cursor-pointer'><IoIosArrowBack /></p>
        <h1 className="font-mono text-3xl text-black-500 text-center	">Edit Product</h1>

        <input 
            type="text" 
            name='productName' 
            placeholder='Product Name' 
            value={product.productName}
            onChange={changeHandler} 
            className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input"  
        />
        
        <input 
            type="number" 
            name='productPrice' 
            placeholder='Product Price' 
            value={product.productPrice}
            onChange={changeHandler}
            className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input"  
        />
        <button 
          className="border-none rounded-md mt-7 py-2 w-40 m-auto btn"

        >Save</button>
    </form>
        </div>
    </div>
    
  )
}

export default EditProduct