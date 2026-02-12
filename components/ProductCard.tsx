import React from 'react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { Star, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/40 transition-all duration-300">
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {discount > 0 && (
          <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-md">
            -{discount}%
          </span>
        )}
        {product.badge && (
          <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-primary-500 rounded-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gray-100 p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
          {product.category}
        </div>
        
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-end gap-2 mb-3">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <span className="text-lg font-bold text-gray-900">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
          
          <Button 
            className="w-full gap-2 group-hover:bg-primary-600 transition-colors" 
            size="sm"
            onClick={() => onAddToCart(product)}
          >
            <Plus size={16} /> Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};