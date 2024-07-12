import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
    <div className='w-[60%] h-screen  flex  items-center flex-col'>
        <h1 className='font-mono my-5 text-3xl text-black-500 text-center'>Product List</h1>
        <input 
            type="text" 
            placeholder='Search Product Name...' 
            value={searchProduct}
            onChange={(e)=>setsearchProduct(e.target.value)}
            className='w-[80%] mb-5 p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input'
        />
        {
            (filterProducts.length === 0) ?
            <p className='text-red-600 text-2xl font-mono'>No Product Found!</p> :
            <>
            {filterProducts.map((product , idx)=>(
                <ul key={idx} className='backdrop-blur-md shadow-md flex w-[80%] p-2 mb-2 justify-between'>
                    <div className='w-[30%]'>
                    <li>{product.productName}</li>
                    </div>
                    <div className='w-[30%]'>
                    <li className=''>₹ {product.productPrice}</li>
                    </div>
                    <div className='w-[10%] mr-[-10%] flex items-end flex-col'>
                    <Link to={`/home/EditProduct/${idx}`}><FaRegEdit />
                    </Link>
                    </div>
                    <div className='w-[10%] cursor-pointer	flex items-end flex-col'>
                    <li onClick={()=>deleteHandler(idx)}><MdDeleteForever /></li>
                    </div>
                </ul>
            ))}
            
            </> 
        }
    </div>
    </>
  )
}

export default ShowProducts
