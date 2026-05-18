import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { plugins, reviews } from "@/data/plugins";

export default function PluginDetail() {
  const { id } = useParams();
  const plugin = plugins.find((p) => p.id === id);
  const pluginReviews = reviews.filter((r) => r.plugin === plugin?.name);

  if (!plugin) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col gap-4 text-muted-foreground">
          <Icon name="PackageX" size={48} className="opacity-30" />
          <p>Плагин не найден</p>
          <Link to="/catalog">
            <Button variant="outline">Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/catalog" className="hover:text-foreground transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{plugin.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="metal-surface rounded-xl p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rust-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Puzzle" size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {plugin.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Star" size={13} className="text-yellow-400 fill-yellow-400" />
                      {plugin.rating} ({plugin.reviewCount} отзывов)
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Download" size={13} />
                      {plugin.downloads.toLocaleString("ru")} установок
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="RefreshCw" size={13} />
                      v{plugin.version}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{plugin.longDescription}</p>
            </div>

            {/* Features */}
            <div className="metal-surface rounded-xl p-8">
              <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "Oswald, sans-serif" }}>
                Возможности
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plugin.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="metal-surface rounded-xl p-8">
              <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "Oswald, sans-serif" }}>
                Требования
              </h2>
              <ul className="space-y-2">
                {plugin.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon name="Info" size={14} className="text-muted-foreground/60" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            {pluginReviews.length > 0 && (
              <div className="metal-surface rounded-xl p-8">
                <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "Oswald, sans-serif" }}>
                  Отзывы
                </h2>
                <div className="space-y-4">
                  {pluginReviews.map((r) => (
                    <div key={r.id} className="bg-secondary/40 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rust-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {r.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{r.author}</div>
                          <div className="text-xs text-muted-foreground">{r.date}</div>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Icon key={i} name="Star" size={11} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="metal-surface rounded-xl p-6 sticky top-20">
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                {plugin.price.toLocaleString("ru")} <span className="text-2xl">₽</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5">Единоразовая оплата + 12 мес. обновлений</p>

              <Button className="w-full rust-gradient text-white border-0 hover:opacity-90 font-semibold mb-3 h-11 glow-rust">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить лицензию
              </Button>
              <Button variant="outline" className="w-full font-medium">
                <Icon name="MessageCircle" size={14} className="mr-2" />
                Задать вопрос
              </Button>

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  ["ShieldCheck", "Мгновенная выдача лицензии"],
                  ["RefreshCw", "Обновления 12 месяцев"],
                  ["Headphones", "Поддержка в Discord"],
                  ["RotateCcw", "Возврат за 3 дня"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon name={icon} size={14} className="text-orange-400" />
                    {text}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Категория</span>
                  <span>{plugin.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Версия</span>
                  <span>{plugin.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Обновлено</span>
                  <span>{plugin.lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
