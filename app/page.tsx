'use client';
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.push('/app/login.tsx');
  };
  return (
    <div>
    <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Username" name="uname" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Password" name="psw" required />

    <div className="flex-column">
      <button type="submit">Login</button>
      <div className="remember-me">
        <input type="checkbox"  name="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
    </div>
  </div>

  <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</div>
);
}