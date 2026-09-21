import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { DeliveryPaymentInfo } from '../components/DeliveryPaymentInfo';
import { Footer } from '../components/Footer';
import { OrderModal } from '../components/OrderModal';
import { CartModal } from '../components/CartModal';
import type { CartItem } from '../components/CartModal';
import { FloatingCakes } from '../components/FloatingCakes';
import { brandData } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Home() {
  useScrollAnimation();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleOpenOrderModal = (productId: string | null = null) => {
    setSelectedProductId(productId);
    setIsOrderModalOpen(true);
  };

  const handleAddToCart = (productId: string, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { productId, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prev => prev.map(item => item.productId === productId ? { ...item, quantity } : item));
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans text-coffee bg-gradient-to-b from-blush-100 via-cream-50 to-blush-200 relative pb-20 md:pb-0">
      <FloatingCakes />
      <main>
        <Hero logoUrl={brandData.images.logoMain} onOrderClick={() => handleOpenOrderModal(null)} />
        <Menu onOrderClick={handleOpenOrderModal} />
        <DeliveryPaymentInfo />
      </main>
      <Footer />
      
      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartModalOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-berry text-white p-4 rounded-full shadow-velvet hover:bg-berry-dark hover:scale-105 transition-all animate-bounce-slow"
          aria-label="Abrir carrinho"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-2 -right-3 bg-white text-berry-dark text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
              {cartItemsCount}
            </span>
          </div>
        </button>
      )}

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        initialProductId={selectedProductId} 
        onAddToCart={handleAddToCart}
      />

      <CartModal 
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
