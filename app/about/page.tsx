import 'app/globals.css'
export default function About() {
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
            <section className="px-4 py-8 text-center">
            <img src="/e-commercelogo.png" alt="Logo" className="logo" />

        <h1 className="text-3xl font-semibold mb-4">Welcome to our e-commerce store!</h1>
        <p className="text-lg m-10">
          At our e-commerce store, we strive to provide you with the best shopping experience. We offer a wide range of products, including electronics, fashion, home decor, and more. With our user-friendly website and secure payment options, you can shop with confidence. Our dedicated customer support team is always ready to assist you with any queries or concerns. We value your satisfaction and aim to deliver high-quality products and exceptional service. Start exploring our store today and find amazing deals on your favorite items!
        </p>
      </section>
    </main>
    );
}
