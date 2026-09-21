import { useState, useEffect } from 'react';
import { productsData } from '../data/mockData';

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId: string | null;
  onAddToCart: (productId: string, quantity: number) => void;
}

export function OrderModal({ isOpen, onClose, initialProductId, onAddToCart }: Readonly<OrderModalProps>) {
  const [quantity, setQuantity] = useState(1);
  const [selectedId, setSelectedId] = useState<string>('');

  // Update selectedId when initialProductId changes
  useEffect(() => {
    if (initialProductId) {
      setSelectedId(initialProductId);
    } else {
      setSelectedId(productsData[0]?.id || '');
    }
    setQuantity(1); // reset quantity on open
  }, [isOpen, initialProductId]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onAddToCart(selectedId, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-coffee/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 300 }).map((_, i) => {
          const size = Math.random() * 24 + 12;
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 3 + 2;
          const delay = Math.random() * 1.5; // Instantâneo, mas distribuído
          return (
            <svg 
              key={i} 
              className="absolute bottom-[-50px] text-berry-light animate-fly-up fill-current opacity-0"
              style={{ 
                width: `${size}px`, 
                height: `${size}px`, 
                left: `${left}%`, 
                animationDuration: `${animationDuration}s`,
                animationDelay: `${delay}s`,
              }} 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          )
        })}
      </div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-sm shadow-velvet p-6 md:p-8 overflow-hidden z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-blush-50 text-coffee-soft hover:bg-blush-100 hover:text-berry-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h3 className="font-brand text-3xl text-berry-dark mb-6 text-center">Fazer Pedido</h3>

        <div className="space-y-6">
          {/* Product Selection */}
          <div className="space-y-2">
            <label htmlFor="product" className="block text-sm font-bold text-coffee">Escolha o Sabor</label>
            {initialProductId ? (
              <div className="w-full px-4 py-3 bg-blush-50 border border-blush-100 rounded-xl text-coffee font-medium">
                {productsData.find(p => p.id === selectedId)?.name || 'Produto não encontrado'}
              </div>
            ) : (
              <select 
                id="product"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-blush-200 rounded-xl text-coffee font-medium focus:outline-none focus:border-berry-light focus:ring-1 focus:ring-berry-light transition-all appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23B04A65' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
              >
                {productsData.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            )}
          </div>

          {/* Quantity Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-coffee">Quantidade</label>
            <div className="flex items-center justify-between bg-blush-50 border border-blush-100 rounded-xl p-1">
              <button 
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-berry-dark font-bold shadow-sm hover:bg-blush-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={quantity <= 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
              </button>
              
              <span className="font-sub text-xl font-bold text-coffee w-12 text-center">{quantity}</span>
              
              <button 
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-berry-dark font-bold shadow-sm hover:bg-blush-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <button 
            onClick={handleConfirm}
            className="w-full py-4 mt-2 bg-berry text-white rounded-xl font-bold tracking-wide hover:bg-berry-dark transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" fill="none" stroke="currentColor"></path>
            </svg>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
