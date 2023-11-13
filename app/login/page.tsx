'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'app/globals.css'
import 'app/login/page.css';

export default function Login() {

  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const handleLogin = async () => {
    try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 

      body: JSON.stringify(loginData)
    });
      if (response.ok) {
      const data = await response.json();
      const { token } = data;
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      // Handle login error
      console.error('Login failed');
    }
  } catch (error) {
    // Handle network or server error
    console.error('An error occurred while logging in:', error);
  }
};
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({
      ...loginData,
      [id]: value
  });
      event.preventDefault();
  };
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      if (accessToken) {
        try {
          const response = await fetch('http://localhost:3000/profile', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setProfileData(data);
          } else {
            console.error('Profile request failed');
          }
        } catch (error) {
          console.error('An error occurred while fetching profile:', error);
        }
      }
    };
       fetchProfileData();
  }, [accessToken]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="header-bar-container grid justify-items-center lg:max-w-20xl lg:xl lg:w-full lg:mx-auto bg-gray-200">
        <div className="header-bar grid text-center lg:max-w-2xl lg:xl lg:w-full lg:grid-cols-4 lg:text-center">
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
          href="/contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Contact{''}
          </h4>
        </a>
        <a
          href="/cart"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Cart{''}
          </h4>
        </a>
      </div>
        </div>
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
      </form>


    <div className="flex-column">
      <div className="remember-me">
        <input className='space' type="checkbox"  name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <button className="login-button" type="submit" onClick={handleLogin}>
        Login
      </button>

      <button className="login-button" type="submit" onClick={() => router.push('/register')}>
        Register
      </button>
  <div className="container">
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</div>

</div>
</main>
);
}