

export interface HeroProps {
  logoUrl: string;
  onOrderClick: (productId: string | null) => void;
}

export function Hero({ logoUrl, onOrderClick }: Readonly<HeroProps>) {
  return (
    <section className="relative pt-8 md:pt-20 pb-12 text-center md:text-left" id="inicio">
      <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="reveal-on-scroll flex items-center justify-center md:justify-start mb-4 md:mb-0 w-full">
          <img 
            alt="Casa Milly Bolos Artesanais" 
            className="animate-float w-72 md:w-96 max-w-full h-auto object-contain drop-shadow-sm" 
            src={logoUrl} 
            style={{ filter: 'drop-shadow(rgba(217, 107, 137, 0.28) 0px 10px 28px)' }}
          />
        </div>
        <div className="reveal-on-scroll space-y-6 max-w-md mx-auto md:mx-0">
          <h1 className="font-brand text-4xl md:text-5xl text-berry-dark hidden md:block leading-tight">
            Bolos Artesanais<br />
            <span className="text-2xl md:text-3xl text-berry-light block mt-2 font-normal">Sob Encomenda</span>
          </h1>
          <p className="text-coffee-soft text-lg hidden md:block font-sans">
            Feito com amor, para adoçar os melhores momentos do seu dia. Encomende agora e surpreenda-se.
          </p>
          <div className="pt-2 flex flex-col items-center md:items-start justify-center gap-3 w-full">
            <button 
              className="animate-cta-pulse w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-berry-dark text-white rounded-full font-medium shadow-button hover:bg-berry-deep hover:shadow-button-hover transition-all duration-300 text-sm" 
              onClick={() => onOrderClick(null)} 
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.449.741.963 1.199.662.589 1.22.771 1.393.858.173.086.274.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.168L2 22l4.98-1.309C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <span>Quero fazer o pedido</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
