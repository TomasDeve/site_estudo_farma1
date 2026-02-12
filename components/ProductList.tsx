import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ title, products, onAddToCart }) => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline">
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};