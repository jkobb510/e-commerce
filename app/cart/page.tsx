 'use client';
import React from 'react';
import 'app/cart/page.css'

export default function Home() {

return (
    <main className="min-h-screen flex-col items-center justify-between p-0">
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
          href="/cart.tsx"
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
      {/*<h4>Your Cart is empty.</h4>
      If cart is empty, display this message vs. if not, display the cart
      */}
    <h2 className='your-cart'>Your Cart</h2>
      <section className="cart-products flex">
        <div className="cart-product-container">
            <div className="image-container">
                    <img src="/table.png" alt="Product 1" />
                </div>
            <div className="product-details">
                <h2>Table</h2>
                <div>by User</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="price block">$99.99</span>
                <div>
                    <button className='quantity-button'>1</button>
                    <button className='delete-button'>Delete</button>

                </div>
            </div>
        </div>
      </section>
    </main>
    
  )
}
