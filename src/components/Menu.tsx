
import { ProductCard } from './ProductCard';
import { productsData } from '../data/mockData';

export interface MenuProps {
  onOrderClick: (productId: string) => void;
}

export function Menu({ onOrderClick }: Readonly<MenuProps>) {
  return (
    <section className="py-12 md:py-20 px-4" id="cardapio">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-on-scroll text-center mb-12">
          <h2 className="font-brand text-4xl md:text-5xl text-berry-dark mb-3">Bolos no Pote</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              description={product.description}
              image={product.image}
              name={product.name}
              price={product.price}
              onOrderClick={onOrderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
