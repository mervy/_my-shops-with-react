import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
    return (
        <CartProvider>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1 containerpy-4">
                    <ProductList />
                    <Cart />
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
};

export default App;
