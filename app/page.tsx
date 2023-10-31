 'use client';
import React from 'react';
import './globals.css'

export default function Home() {

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
          href="/cart"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Cart{''}
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
        <a
          href="/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={`text-1xl`}>
            Login{''}
          </h4>
        </a>
      </div>
      </div>
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
