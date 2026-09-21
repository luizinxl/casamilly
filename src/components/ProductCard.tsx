

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  onOrderClick: (productId: string) => void;
}

export function ProductCard({ id, name, description, price, image, onOrderClick }: Readonly<ProductCardProps>) {
  return (
    <article className="reveal-on-scroll group w-full max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-velvet border border-blush-200 card-glow-hover">
      <div className="aspect-square relative overflow-hidden bg-white md:h-[340px] md:aspect-auto flex items-center justify-center p-4">
        <img 
          alt={name} 
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" 
          loading="lazy" 
          src={image} 
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-sub text-xl font-bold text-coffee leading-tight">{name}</h3>
          <span className="text-berry-accent font-bold whitespace-nowrap">{price}</span>
        </div>
        <p className="text-coffee-soft text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button 
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blush-100 text-berry-dark rounded-xl font-medium hover:bg-blush-200 transition-colors text-sm" 
          onClick={() => onOrderClick(id)}
        >
          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.449.741.963 1.199.662.589 1.22.771 1.393.858.173.086.274.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.168L2 22l4.98-1.309C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
          </svg>
          <span>Pedir Agora</span>
        </button>
      </div>
    </article>
  );
}
