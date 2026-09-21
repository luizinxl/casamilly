
import { brandData } from '../data/mockData';

export function Footer() {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden" id="contato">
      <div className="absolute top-0 inset-x-0 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: `url('${brandData.images.footerDecor}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
      <div className="max-w-md mx-auto px-4 relative z-10 text-center">
        <div className="reveal-on-scroll flex justify-center mb-8">
          <img 
            alt="Casa Milly Logo" 
            className="w-48 h-auto object-contain drop-shadow-sm" 
            loading="lazy" 
            src={brandData.images.logoFooter} 
          />
        </div>
        <div className="reveal-on-scroll flex justify-center gap-4 mb-10">
          <a 
            className="w-12 h-12 rounded-2xl bg-white text-berry-dark flex items-center justify-center shadow-sm border border-blush-100 hover:bg-berry-dark hover:text-white transition-colors" 
            href={brandData.instagram.url} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
          <a 
            className="w-12 h-12 rounded-2xl bg-white text-berry-dark flex items-center justify-center shadow-sm border border-blush-100 hover:bg-berry-dark hover:text-white transition-colors" 
            href={brandData.whatsapp.url} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.449.741.963 1.199.662.589 1.22.771 1.393.858.173.086.274.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.168L2 22l4.98-1.309C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
            </svg>
          </a>
        </div>
        <div className="reveal-on-scroll border-t border-blush-200/60 pt-6">
          <p className="font-sub text-coffee font-medium">{brandData.subtitle}</p>
          <p className="text-coffee-light text-xs mt-2">© {new Date().getFullYear()} {brandData.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
