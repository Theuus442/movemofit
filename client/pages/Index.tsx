import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Star,
  Lock,
  CreditCard,
  Truck,
  Repeat,
} from "lucide-react";

export default function Index() {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <TestimonialsSection />
      <OfferSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Vista-se para Performar com a{" "}
            <span className="text-primary">Move Mode Fit</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Moda fitness feminina com qualidade premium, conforto e estilo para
            treinos e lifestyle. Descubra leggings, tops, acessórios e muito
            mais.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://movemodefit.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-[1.02]">
                VER COLEÇÃO
              </Button>
            </a>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4" /> Frete para todo Brasil
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4" /> Pagamento seguro
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
          <img
            src="https://images.pexels.com/photos/7674484/pexels-photo-7674484.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Mulher confiante treinando com roupas fitness"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const items = [
    {
      title: "Qualidade premium e tecido que abraça o corpo",
    },
    {
      title: "Conforto e performance para treinar ou usar no dia a dia",
    },
    {
      title: "Modelagens que valorizam e elevam sua confiança",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Por que Escolher a Move Mode Fit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      name: "Conjunto de Academia em Poliamida: Conforto e Zero Transparência para Seus Treinos",
      price: "R$208,20",
      img: "https://cdn.builder.io/api/v1/image/assets%2Fb5e820d90c4545ddac70e63bba740e23%2F2108b1916ab64b50b66c760d3b6e4e02?format=webp&width=800",
      url: "https://movemodefit.com.br",
      tag: "Novo",
    },
    {
      name: "Calça Pantalona Feminina Yoga: Conforto e Estilo do Brasil",
      price: "R$83,14",
      oldPrice: "R$199,99",
      discount: "-58% OFF",
      img: "https://cdn.builder.io/api/v1/image/assets%2Fb5e820d90c4545ddac70e63bba740e23%2F77d6d1fdcec7452981928a36b3848f14?format=webp&width=800",
      url: "https://movemodefit.com.br",
      tag: "Oferta",
    },
    {
      name: "Mini Stepper Silencioso com Pedais – Equipamento de Escalada para Exercícios em Casa, Fitness e Cardio",
      price: "R$1.924,54",
      img: "https://cdn.builder.io/api/v1/image/assets%2Fb5e820d90c4545ddac70e63bba740e23%2F5116d9715796423cad3de1ad00d79c27?format=webp&width=800",
      url: "https://movemodefit.com.br",
      tag: "Equipamento",
    },
    {
      name: "Rolo Meia Roda de Espuma – Yoga, Pilates, Equilíbrio e Massagem Muscular",
      price: "R$105,90",
      oldPrice: "R$129,90",
      discount: "-18% OFF",
      img: "https://cdn.builder.io/api/v1/image/assets%2Fb5e820d90c4545ddac70e63bba740e23%2F6b750d98b64647cd886489fb8460fb4b?format=webp&width=800",
      url: "https://movemodefit.com.br",
      tag: "Acessórios",
    },
  ] as const;

  return (
    <section id="produtos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Destaques da Coleção
          </h2>
          <a
            href="https://movemodefit.com.br"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block"
          >
            <Button variant="secondary" className="rounded-full">
              Ver todos
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl overflow-hidden bg-white ring-1 ring-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex flex-1 flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {p.discount ?? p.tag}
                  </span>
                  <span className="text-sm text-gray-500">até 12x</span>
                </div>
                <h3 className="font-semibold leading-tight line-clamp-2 min-h-[3.25rem]">
                  {p.name}
                </h3>
                <div className="mt-1 flex items-baseline gap-2">
                  {p.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {p.oldPrice}
                    </span>
                  )}
                  <span className="text-lg font-extrabold">{p.price}</span>
                </div>
                <Button className="mt-auto w-full rounded-full bg-primary text-white hover:bg-primary/90">
                  Comprar
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Qualidade impecável e veste muito bem. As peças são lindas e confortáveis!",
      author: "Juliana P.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      quote: "Entrega rápida e atendimento excelente. Já virei fã da marca!",
      author: "Bruna M.",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      quote:
        "As peças valorizam o corpo e são super resistentes. Recomendo muito!",
      author: "Amanda C.",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Quem Usa, Ama 💖
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex h-full flex-col rounded-2xl border border-gray-100 p-6 shadow-sm bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.author}
                  className="h-16 w-16 rounded-full object-cover object-center ring-2 ring-primary/30 shadow-sm"
                />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-5 w-5 text-primary fill-primary"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">{t.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section
      id="comprar"
      className="relative bg-neutral-950 text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Compre com Confiança
          </h2>
          <p className="mt-4 text-white/80">
            Pagamento seguro, envio rápido e política de troca simples.
            Aproveite as ofertas da semana!
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white text-gray-900 p-8 md:p-10 shadow-xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Ambiente 100% seguro</p>
                  <p className="text-sm text-gray-600">
                    Seus dados estão protegidos
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Envio para todo Brasil</p>
                  <p className="text-sm text-gray-600">Rastreio e agilidade</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Repeat className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Troca fácil em 7 dias</p>
                  <p className="text-sm text-gray-600">Sem complicações</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://movemodefit.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="rounded-full h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 animate-cta-pulse transition-transform hover:scale-[1.02]">
                  COMPRAR AGORA
                </Button>
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                <CreditCard className="h-4 w-4" />
                <span>Pix • Boleto • Cartão em até 12x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
