'use client'
import React, { useEffect, useState } from 'react';
import 'app/globals.css';
import 'app/login/page.css';
import axios from 'axios';
import HeaderBar from '../headerbar';
import router from 'next/router';
import { useRouter } from 'next/navigation';
const url=process.env.LOCALSERVER_URL; 
export default function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const handleLogin = async (event: React.FormEvent) => {
    const formData = new FormData();
    formData.append('username', loginData.username);
    formData.append('password', loginData.password);
    try{
    const response = await axios.post(`${url}/api/auth/login`, formData);
        if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        router.push('/');
      }else{
        console.log(response)
      }
    }catch (error) {
      console.log(error)
    }
     }; 


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <HeaderBar />
        <div className='container-white'>
        <img src="/e-commercelogo.png" alt="Logo" className="logo" />
      <form onSubmit={ handleLogin } >
      <label htmlFor="username">Username</label>

      <input
        type="text"
        id="username"
        name="username"
        value={loginData.username}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>

    <input
        type="password"
        id="password"
        name="password"
        value={loginData.password}
        onChange={handleInputChange}

      />


    <div className="flex-column">
      <div className="remember-me">
        <input className='space' type="checkbox"  name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <button className="login-button" type="submit" onClick={handleLogin}>
        Login
      </button>
      <button className="login-button" type="button" onClick={() => router.push('/register')}>
        Register
      </button>
  <div className="container">
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</div>
      </form>

</div>
</main>
);
}
