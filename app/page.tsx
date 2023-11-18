import Link from 'next/link'
 'use client';
import React from 'react';
import './globals.css'
import HeaderBar from './headerbar';

export default function Home() {

return (
    <main className="min-h-screen flex-col items-center justify-between p-0">
        <HeaderBar />
      <h1>Shop</h1>
      <section className="featured-products">
  <div className="product">
    <div className="product-image image-container">
      <img src="/table.png" alt="Product 1" />
    </div>
    <h3>Table</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <span className="price block">$99.99</span>
    <div>
        <button className='add-to-cart-button'>Add To Cart</button>
    </div>
  </div>

  <div className="product">
    <div className="product-image image-container">
      <img src="/coffee.png" alt="Product 2" />
    </div>
    <h3>Coffee Cup</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <span className="price block">$79.99</span>
        <button className='add-to-cart-button'>Add To Cart</button>
  </div>
  <div className="product">
  <div className="product-image image-container">
      <img src="/knife.png" alt="Product 2" />
    </div>
    <h3>Knife Set</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <span className="price block">$79.99</span>
        <button className='add-to-cart-button'>Add To Cart</button>
  </div>

</section>
    </main>
    
  )
}
