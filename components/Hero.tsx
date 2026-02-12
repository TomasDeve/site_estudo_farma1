import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Clock, ShieldCheck, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white pt-8 pb-12 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Entrega grátis na primeira compra
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Cuidar da saúde <br className="hidden lg:block" />
              nunca foi tão <span className="text-primary-600">simples</span>.
            </h1>
            
            <p className="text-lg text-gray-600 md:text-xl max-w-lg mx-auto lg:mx-0">
              Medicamentos, dermocosméticos e tudo para o seu bem-estar com entrega expressa e farmacêuticos online 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="gap-2 shadow-primary-500/25 shadow-lg">
                Comprar Agora <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Enviar Receita
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-100 mt-8">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Truck size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">Entrega Flash</div>
                <div className="text-xs text-gray-500 hidden sm:block">Receba em até 2h</div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">100% Seguro</div>
                <div className="text-xs text-gray-500 hidden sm:block">Pagamento protegido</div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Clock size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">Suporte 24h</div>
                <div className="text-xs text-gray-500 hidden sm:block">Fale com farmacêutico</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop" 
              alt="Farmacêutica sorrindo segurando medicação" 
              className="relative rounded-3xl shadow-2xl shadow-gray-200/50 w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Qualidade Garantida</p>
                <p className="text-xs text-gray-500">Produtos certificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};