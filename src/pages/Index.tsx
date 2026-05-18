import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PluginCard from "@/components/PluginCard";
import { plugins, reviews } from "@/data/plugins";

export default function Index() {
  const featured = plugins.filter((p) => p.badge);

  const stats = [
    { label: "Плагинов", value: "50+", icon: "Puzzle" },
    { label: "Серверов используют", value: "1 200+", icon: "Server" },
    { label: "Довольных клиентов", value: "3 500+", icon: "Users" },
    { label: "Рейтинг", value: "4.8 ★", icon: "Star" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative noise-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1.5 mb-6 animate-fade-up stagger-1">
              <Icon name="Zap" size={12} />
              Плагины для Rust серверов
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up stagger-2" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.02em" }}>
              ПРОКАЧАЙ СВОЙ<br />
              <span className="rust-text">RUST СЕРВЕР</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up stagger-3">
              Профессиональные плагины с лицензиями, обновлениями и поддержкой. Установка за 5 минут — ваш сервер станет лучшим.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up stagger-4">
              <Link to="/catalog">
                <Button size="lg" className="rust-gradient text-white border-0 hover:opacity-90 font-semibold px-8 glow-rust">
                  <Icon name="ShoppingBag" size={16} className="mr-2" />
                  Смотреть каталог
                </Button>
              </Link>
              <Link to="/faq">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  Как это работает?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold rust-text mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured plugins */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-orange-400 font-medium mb-2 uppercase tracking-wider">Популярное</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
              Хиты продаж
            </h2>
          </div>
          <Link to="/catalog">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground gap-1.5">
              Все плагины <Icon name="ArrowRight" size={15} />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => (
            <PluginCard key={p.id} plugin={p} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <p className="text-sm text-orange-400 font-medium mb-2 uppercase tracking-wider">Преимущества</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "ShieldCheck", title: "Лицензионная защита", desc: "Каждый плагин привязан к вашему серверу. Никаких пиратских копий и нестабильного кода." },
              { icon: "RefreshCw", title: "Бесплатные обновления", desc: "Все обновления включены на 12 месяцев. Плагины всегда совместимы с актуальной версией Rust." },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Discord-канал поддержки с ответом в течение нескольких часов. Помогаем с установкой бесплатно." },
            ].map((f) => (
              <div key={f.title} className="metal-surface rounded-lg p-6">
                <div className="w-11 h-11 rust-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon name={f.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm text-orange-400 font-medium mb-2 uppercase tracking-wider">Отзывы</p>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
            Что говорят клиенты
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.id} className="metal-surface rounded-lg p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rust-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.author}</div>
                  <div className="text-xs text-muted-foreground">{r.plugin}</div>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              <span className="text-xs text-muted-foreground/60">{r.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rust-gradient rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            Готов улучшить сервер?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Более 50 плагинов для любого типа сервера. Начни с бестселлеров.
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-bold px-10">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}