 'use client';
import React from 'react';
import 'app/globals.css'
import 'app/cart/page.css'
import HeaderBar from '../headerbar';

export default function Cart() {

return (
    <main className="min-h-screen flex-col items-center justify-between p-0">
      <HeaderBar />
      {/*<h4>Your Cart is empty.</h4>
      If cart is empty, display this message vs. if not, display the cart
      */}
    <h2 className='your-cart'>Your Cart</h2>
      <section className="featured-products">
  <div className="product">
    <div className="product-image image-container">
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
