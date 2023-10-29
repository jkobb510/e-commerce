'use client';
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation';
import 'app/login/page.css';
import Link from 'next/link';
export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.push('/');
  };
  return (
    <div className="main-content">
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      <div className='grid justify-items-center lg:max-w-20xl lg:xl lg:w-full lg:mx-auto bg-gray-200'>
      <div className="grid text-center lg:max-w-2xl lg:xl lg:w-full lg:grid-cols-3 lg:text-center">
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            About{''}
          </h4>
        </a>

        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Shop{''}
          </h4>
        </a>


        <a
          href="/contact.tsx"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Contact{' '}
          </h4>
        </a>
      </div>
        </div>
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