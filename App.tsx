import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductList } from './components/ProductList';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Split products for display
  const bestSellers = PRODUCTS.filter(p => p.badge === 'Mais Vendido' || p.rating >= 4.8).slice(0, 4);
  const offers = PRODUCTS.filter(p => p.badge === 'Oferta' || p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <CategorySection />
        <ProductList 
          title="Mais Vendidos" 
          products={bestSellers} 
          onAddToCart={handleAddToCart}
        />
        
        {/* Banner Strip */}
        <div className="bg-primary-600 py-4 overflow-hidden">
          <div className="container mx-auto px-4 text-center text-white font-medium flex items-center justify-center gap-8 animate-pulse">
            <span>🚀 Frete Grátis acima de R$ 99</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">💳 3x Sem Juros</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">💊 Farmacêutico Online</span>
          </div>
        </div>

        <ProductList 
          title="Ofertas Imperdíveis" 
          products={offers} 
          onAddToCart={handleAddToCart}
        />
        <Features />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;