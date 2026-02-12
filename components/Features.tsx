import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Banner Promo */}
        <div className="relative rounded-3xl bg-primary-900 px-6 py-12 md:px-12 md:py-16 mb-20 overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary-700/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-secondary-700/50 blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Baixe nosso App
              </h2>
              <p className="text-primary-100 text-lg mb-8 max-w-md">
                Tenha a farmácia na palma da sua mão. Ofertas exclusivas e frete grátis na primeira compra pelo app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                    <div className="text-2xl"></div>
                    <div className="text-left leading-none">
                       <div className="text-[10px] uppercase">Download on the</div>
                       <div className="text-sm font-bold">App Store</div>
                    </div>
                 </button>
                 <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                    <div className="text-2xl">▶</div>
                    <div className="text-left leading-none">
                       <div className="text-[10px] uppercase">Get it on</div>
                       <div className="text-sm font-bold">Google Play</div>
                    </div>
                 </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center relative">
               {/* Mockup Phone */}
               <div className="w-64 h-96 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="absolute top-0 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
                      <div className="text-primary-600 font-bold text-xl mb-2">PharmaLife</div>
                      <div className="text-gray-400 text-xs text-center">App Interface</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">O que nossos clientes dizem</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-8 relative hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <Quote className="absolute top-6 left-6 text-primary-200" size={40} />
              <p className="text-gray-600 mb-6 relative z-10 pt-4 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-primary-600 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};