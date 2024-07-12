import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import EditProduct from './components/EditProduct';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>

      <Routes>
        <Route
          path='/'
          element={isLoggedIn ?
            (<Navigate to="/home" />) : (<Login setIsLoggedIn={setIsLoggedIn} />)
          } />

        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/home/EditProduct/:idx"
          element={
            isLoggedIn ? (
              <EditProduct setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />


      </Routes>
    </>
  )
}

export default App