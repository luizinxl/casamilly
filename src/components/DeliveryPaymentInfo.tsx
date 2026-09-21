import { deliveryData, paymentData } from '../data/mockData';

export function DeliveryPaymentInfo() {
  return (
    <section className="py-12 md:py-20 px-4" id="entrega">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Entrega Section */}
        <div className="reveal-on-scroll bg-white p-8 md:p-10 rounded-3xl shadow-velvet border border-blush-200 flex flex-col card-glow-hover">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
              <svg className="w-6 h-6 text-berry-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-berry-light uppercase">{deliveryData.subtitle}</span>
              <h3 className="font-sub text-2xl md:text-3xl font-bold text-coffee leading-none mt-1">{deliveryData.title}</h3>
            </div>
          </div>
          <div className="space-y-4 flex-grow">
            {deliveryData.items.map((item, index) => (
              <div key={index} className="flex gap-4 bg-blush-50/50 hover:bg-blush-50 transition-colors p-5 rounded-2xl border border-blush-100/50">
                <div className="w-2 h-2 rounded-full bg-berry-light mt-2 flex-shrink-0"></div>
                <p className="text-coffee-soft text-sm leading-relaxed">
                  <span className="font-bold text-coffee block mb-1">{item.title}</span> {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagamento Section */}
        <div className="reveal-on-scroll bg-white p-8 md:p-10 rounded-3xl shadow-velvet border border-blush-200 flex flex-col card-glow-hover">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
              <svg className="w-6 h-6 text-berry-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-berry-light uppercase">{paymentData.subtitle}</span>
              <h3 className="font-sub text-2xl md:text-3xl font-bold text-coffee leading-none mt-1">{paymentData.title}</h3>
            </div>
          </div>
          
          <div className="space-y-6 flex-grow flex flex-col">
            <div className="flex flex-wrap gap-3">
              {paymentData.methods.map((method, index) => (
                <span key={index} className="px-5 py-2.5 bg-blush-50 hover:bg-blush-100 transition-colors text-coffee text-sm rounded-xl font-medium border border-blush-100 shadow-sm">
                  {method}
                </span>
              ))}
            </div>
            
            <div className="mt-auto pt-8">
              <div className="bg-blush-50/80 p-5 rounded-2xl border border-blush-100">
                <p className="text-sm text-coffee-soft leading-relaxed">
                  <svg className="w-5 h-5 inline-block mr-2 text-berry-light -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="font-bold text-berry-dark">{paymentData.installmentNote.highlight}</span> {paymentData.installmentNote.text}
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
