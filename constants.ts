import { Product, Category, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Medicamentos', icon: 'Pill', slug: 'medicamentos' },
  { id: '2', name: 'Dermocosméticos', icon: 'Sparkles', slug: 'dermocosmeticos' },
  { id: '3', name: 'Higiene Pessoal', icon: 'Bath', slug: 'higiene' },
  { id: '4', name: 'Mamãe e Bebê', icon: 'Baby', slug: 'mamae-bebe' },
  { id: '5', name: 'Vitaminas', icon: 'Sun', slug: 'vitaminas' },
  { id: '6', name: 'Primeiros Socorros', icon: 'Cross', slug: 'primeiros-socorros' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vitamina C 1g Efervescente',
    description: 'Imunidade reforçada para o dia a dia. Tubo com 10 comprimidos.',
    price: 19.90,
    originalPrice: 29.90,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Vitaminas',
    badge: 'Oferta',
    rating: 4.8,
    reviews: 120
  },
  {
    id: '2',
    name: 'Protetor Solar FPS 70',
    description: 'Proteção máxima contra raios UVA/UVB. Toque seco.',
    price: 79.90,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'Dermocosméticos',
    rating: 4.9,
    reviews: 85
  },
  {
    id: '3',
    name: 'Analgésico Dorflex 36 Comprimidos',
    description: 'Alívio rápido para dores musculares e cefaleias.',
    price: 22.50,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'Medicamentos',
    badge: 'Mais Vendido',
    rating: 5.0,
    reviews: 450
  },
  {
    id: '4',
    name: 'Fralda Pampers Premium Care G',
    description: 'Suavidade e proteção por até 12 horas. Pacote com 60 unidades.',
    price: 109.90,
    originalPrice: 129.90,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'Mamãe e Bebê',
    badge: 'Desconto',
    rating: 4.7,
    reviews: 320
  },
  {
    id: '5',
    name: 'Creme Hidratante Facial',
    description: 'Hidratação profunda com ácido hialurônico.',
    price: 45.00,
    image: 'https://picsum.photos/400/400?random=5',
    category: 'Dermocosméticos',
    rating: 4.6,
    reviews: 98
  },
  {
    id: '6',
    name: 'Ômega 3 1000mg',
    description: 'Saúde cardiovascular e cerebral. 120 cápsulas.',
    price: 89.90,
    originalPrice: 110.00,
    image: 'https://picsum.photos/400/400?random=6',
    category: 'Vitaminas',
    rating: 4.9,
    reviews: 150
  },
  {
    id: '7',
    name: 'Kit Primeiros Socorros Básico',
    description: 'Essencial para emergências domésticas.',
    price: 55.90,
    image: 'https://picsum.photos/400/400?random=7',
    category: 'Primeiros Socorros',
    rating: 4.5,
    reviews: 40
  },
  {
    id: '8',
    name: 'Shampoo Anticaspa',
    description: 'Controle efetivo da caspa e oleosidade.',
    price: 32.90,
    image: 'https://picsum.photos/400/400?random=8',
    category: 'Higiene Pessoal',
    rating: 4.4,
    reviews: 210
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    text: 'A entrega foi super rápida, chegou em menos de 2 horas! O atendimento pelo chat também foi excelente.',
    role: 'Cliente Fiel',
    avatar: 'https://picsum.photos/100/100?random=9'
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    text: 'Preços muito competitivos e site muito fácil de usar. Encontrei tudo o que precisava para minha família.',
    role: 'Cliente Novo',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '3',
    name: 'Fernanda Souza',
    text: 'Amei a variedade de dermocosméticos. Os descontos valem muito a pena!',
    role: 'Cliente VIP',
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];