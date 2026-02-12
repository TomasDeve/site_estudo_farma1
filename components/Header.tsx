import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, User } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 -ml-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-primary-700">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              +
            </div>
            PharmaLife
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary-600 transition-colors">Medicamentos</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Dermocosméticos</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Ofertas</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Serviços</a>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center relative w-full max-w-md mx-8">
          <input 
            type="text" 
            placeholder="O que você procura hoje?" 
            className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hidden sm:flex">
            <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hidden sm:flex">
            <User size={20} />
          </Button>
          
          <Button 
            variant="primary" 
            className="relative rounded-full aspect-square p-0 w-10 h-10 sm:w-auto sm:h-10 sm:px-4 sm:aspect-auto flex items-center gap-2"
            onClick={onCartClick}
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cesta</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 sm:static sm:bg-white/20 sm:px-2 sm:py-0.5 sm:rounded-full sm:text-xs sm:font-bold flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Search (Below Header) */}
      <div className="lg:hidden px-4 pb-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:outline-none transition-all text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] z-40 bg-white md:hidden border-t border-gray-100 p-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
            <a href="#" className="py-2 border-b border-gray-50 hover:text-primary-600">Medicamentos</a>
            <a href="#" className="py-2 border-b border-gray-50 hover:text-primary-600">Dermocosméticos</a>
            <a href="#" className="py-2 border-b border-gray-50 hover:text-primary-600">Mamãe e Bebê</a>
            <a href="#" className="py-2 border-b border-gray-50 hover:text-primary-600 text-red-500">Ofertas do Dia</a>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <User size={18} /> Minha Conta
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Heart size={18} /> Favoritos
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};