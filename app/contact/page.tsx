import 'app/globals.css';
export default function Contact() {
    return (
    <main className="flex flex-col items-center justify-between p-0">
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
                    <section className="px-4 py-4 text-center">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </section>
    </main>
    )
}