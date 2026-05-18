import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PluginCard from "@/components/PluginCard";
import { plugins, categories } from "@/data/plugins";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function Catalog() {
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"popular" | "price_asc" | "price_desc" | "rating">("popular");

  const filtered = plugins
    .filter((p) => {
      const matchCat = category === "Все" || p.category === category;
      const matchSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return b.downloads - a.downloads;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <p className="text-sm text-orange-400 font-medium mb-2 uppercase tracking-wider">Все плагины</p>
          <h1 className="text-4xl font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
            Каталог
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск плагина..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground"
            >
              <option value="popular">По популярности</option>
              <option value="rating">По рейтингу</option>
              <option value="price_asc">Сначала дешевле</option>
              <option value="price_desc">Сначала дороже</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                category === cat
                  ? "rust-gradient text-white border-transparent"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-40" />
            <p>Ничего не найдено. Попробуй другой запрос.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-5">Найдено: {filtered.length}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <PluginCard key={p.id} plugin={p} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
