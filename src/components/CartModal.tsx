import { productsData, brandData } from '../data/mockData';

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartModal({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }: Readonly<CartModalProps>) {
  if (!isOpen) return null;

  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace(/[^\d,.-]/g, '').replace(',', '.'));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = productsData.find(p => p.id === item.productId);
      if (product) {
        return total + (parsePrice(product.price) * item.quantity);
      }
      return total;
    }, 0);
  };

  const handleConfirm = () => {
    const itemsText = cart.map(item => {
      const product = productsData.find(p => p.id === item.productId);
      return `- ${item.quantity}x Bolo no pote *${product?.name || 'Desconhecido'}*`;
    }).join('\n');
    
    const total = calculateTotal();
    const message = `Olá! Vim pelo site e gostaria de encomendar:\n${itemsText}\n\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;
    const whatsappUrl = `https://wa.me/55${brandData.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-coffee/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-velvet p-6 md:p-8 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-blush-50 text-coffee-soft hover:bg-blush-100 hover:text-berry-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h3 className="font-brand text-3xl text-berry-dark mb-6 text-center">Seu Carrinho</h3>

        {cart.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-blush-50 rounded-full flex items-center justify-center text-berry-light">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <p className="text-coffee-soft">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-6 custom-scrollbar">
              {cart.map((item) => {
                const product = productsData.find(p => p.id === item.productId);
                if (!product) return null;
                
                return (
                  <div key={item.productId} className="flex items-center gap-4 bg-blush-50/50 p-3 rounded-2xl border border-blush-100">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-xl" />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-coffee truncate capitalize">{product.name}</h4>
                      <p className="text-berry font-medium">{product.price}</p>
                    </div>

                    <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-blush-100 shadow-sm">
                      <button 
                        onClick={() => {
                          if (item.quantity > 1) onUpdateQuantity(item.productId, item.quantity - 1);
                          else onRemoveItem(item.productId);
                        }}
                        className="w-7 h-7 flex items-center justify-center rounded-md bg-blush-50 text-berry-dark hover:bg-blush-100 transition-colors"
                      >
                        {item.quantity === 1 ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                        )}
                      </button>
                      <span className="font-sub font-bold text-coffee w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md bg-blush-50 text-berry-dark hover:bg-blush-100 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-blush-200 pt-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-coffee-soft font-medium">Total</span>
                <span className="font-brand text-2xl text-berry-dark">
                  R$ {calculateTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full py-4 bg-berry text-white rounded-xl font-bold tracking-wide hover:bg-berry-dark transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.449.741.963 1.199.662.589 1.22.771 1.393.858.173.086.274.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.168L2 22l4.98-1.309C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              Confirmar Pedido
            </button>
          </>
        )}
      </div>
    </div>
  );
}
