import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                +
              </div>
              PharmaLife
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cuidando da sua saúde com dedicação e carinho. A melhor farmácia online do Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Institucional</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categorias</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Medicamentos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Dermocosméticos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Vitaminas e Suplementos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Higiene Pessoal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Atendimento</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-500 mt-0.5" />
                <span>0800 123 4567 <br /> <span className="text-xs text-gray-500">Seg a Sex: 8h às 20h</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500" />
                <span>contato@pharmalife.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-0.5" />
                <span>Av. Paulista, 1000 - Bela Vista <br /> São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 PharmaLife. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             {/* Payment Methods placeholders */}
             <div className="w-10 h-6 bg-white rounded opacity-50"></div>
             <div className="w-10 h-6 bg-white rounded opacity-50"></div>
             <div className="w-10 h-6 bg-white rounded opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};