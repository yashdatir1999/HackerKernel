import React, { useState } from 'react'

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", JSON.stringify(data.token));
        setIsLoggedIn(true);
      } else {
        setError(data.error || "Invalid email or password");
      }

    } catch (error) {
      setError("An error occurred while logging in.");
    }
  }
  return (
    <div className='  flex justify-evenly items-center login-bg '>
      <div className='w-[70%] h-screen  ml-[10%] rounded-lg  flex justify-center items-center'>
        <div className='h-[60%] w-[60%] backdrop-blur-md form-bg p-5 rounded-md	'>
        <form onSubmit={submitHandler} className='flex flex-col justify-center gap-5 bg-red-600"'>
          <h1 className="font-mono text-3xl text-black-500 text-center	">LOGIN</h1>
          <input 
            type="email" 
            name="email" 
            placeholder='Enter E-mail' 
            value={email} onChange={(e) => setEmail(e.target.value)} 
            className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input"  
          />
          <input 
            type="password" 
            name='password' 
            placeholder='password' 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            className="p-2 bg-transparent	border-black border-b-[1px] rounded-md outline-none input"  
          />
          <button
          className="border-none rounded-md mt-7 py-2 w-40 m-auto btn"
          >Login</button>
        </form>

        </div>
      </div>
      <div className='w-[100%] h-screen  flex justify-center items-center flex-col	 '>
        <h1 className='text-4xl mb-5'>Welcome Back!</h1>
         
        <h4 className='font-semibold'>Test E-mail: <span className='font-light	'>eve.holt@reqres.in</span></h4>
        <h4 className='font-semibold	'>Test Password: <span className='font-light	'>pistol</span></h4>
        
      </div>
    </div>
  )
}

export default Login