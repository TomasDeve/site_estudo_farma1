import React from 'react';
import { CATEGORIES } from '../constants';
import { Pill, Sparkles, Bath, Baby, Sun, Cross } from 'lucide-react';

// Icon mapping helper
const IconMap: Record<string, React.ElementType> = {
  Pill,
  Sparkles,
  Bath,
  Baby,
  Sun,
  Cross
};

export const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Navegue por Categorias</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => {
            const Icon = IconMap[category.icon];
            return (
              <a 
                key={category.id} 
                href={`#${category.slug}`}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-primary-100 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700 text-center">
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};