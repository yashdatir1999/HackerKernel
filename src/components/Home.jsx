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
      <div className="p-4 flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 hover:bg-red-600 text-black font-semibold px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
      <div>
      <AddProduct />
      <ShowProducts />
      </div>
    </>
  )
}

export default Home