import 'app/globals.css'
import HeaderBar from '../headerbar';
export default function About() {
    return (
    <main className="min-h-screen flex-col items-center justify-between p-0">
        <HeaderBar />
            <section className="px-4 py-8 text-center">
            <img src="/e-commercelogo.png" alt="Logo" className="logo" />

        <h2 className="text-3xl font-semibold mb-4">Welcome to our e-commerce store!</h2>
        <p className="text-lg m-10">
          At our e-commerce store, we strive to provide you with the best shopping experience. We offer a wide range of products, including electronics, fashion, home decor, and more. With our user-friendly website and secure payment options, you can shop with confidence. Our dedicated customer support team is always ready to assist you with any queries or concerns. We value your satisfaction and aim to deliver high-quality products and exceptional service. Start exploring our store today and find amazing deals on your favorite items!
        </p>
      </section>
    </main>
    );
}
