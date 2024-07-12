import React from 'react'
import AddProduct from './AddProduct';
import ShowProducts from './ShowProducts';

const Home = ({setIsLoggedIn}) => {

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <>
    <div className='home-bg h-screen w-screen overflow-hidden'>
      <div className="px-5 py-3 flex justify-between items-center	shadow-md">
        <h2 className="text-2xl font-semibold ">Home Page</h2>
        <button
          onClick={handleLogout}
          className="bg-red-400 px-3 py-2 rounded-md "
        >
          Logout
        </button>
      </div>
      <div className='flex w-screen '>
      <AddProduct />
      <ShowProducts />
      </div>
    </div>
    </>
  )
}

export default Home