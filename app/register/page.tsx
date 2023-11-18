'use client';
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation';
import 'app/login/page.css';
import Link from 'next/link';
import HeaderBar from '../headerbar';
export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.push('/');
  };
  return (
    <div className="main-content">
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
    <HeaderBar />
    <div className="container-white">
        <img src="/e-commercelogo.png" alt="Logo" className="logo" />

    <input type="text" placeholder="Username" name="uname" required />

    <input type="password" placeholder="Password" name="psw" required />

    <div className="flex-column">
      <div className="remember-me">
        <input className='space' type="checkbox"  name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <button className="login-button" type="submit" onClick={handleLogin}>Login</button>
      <button className="login-button" type="submit" onClick={() => router.push('/register')}>Register</button>


    </div>
  <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</div>
</main>
</div>
);
}