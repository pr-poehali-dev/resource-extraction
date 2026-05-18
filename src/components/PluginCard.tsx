import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Plugin } from "@/data/plugins";

interface PluginCardProps {
  plugin: Plugin;
}

export default function PluginCard({ plugin }: PluginCardProps) {
  const badgeColors: Record<string, string> = {
    Хит: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Новинка: "bg-green-500/20 text-green-400 border-green-500/30",
    Топ: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  return (
    <div className="metal-surface metal-surface-hover rounded-lg overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-black/40">
      <div className="h-44 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
        <div className="w-16 h-16 rust-gradient rounded-xl flex items-center justify-center opacity-80">
          <Icon name="Puzzle" size={28} className="text-white" />
        </div>
        {plugin.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[plugin.badge]}`}>
            {plugin.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 text-xs text-muted-foreground bg-black/40 px-2 py-0.5 rounded">
          v{plugin.version}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-base leading-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
              {plugin.name}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {plugin.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {plugin.tags.map((tag) => (
            <span key={tag} className="tag-pill bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-auto">
          <span className="flex items-center gap-1">
            <Icon name="Star" size={13} className="text-yellow-400 fill-yellow-400" />
            {plugin.rating}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Download" size={13} />
            {plugin.downloads.toLocaleString("ru")}
          </span>
          <span className="ml-auto text-foreground font-bold text-base">
            {plugin.price.toLocaleString("ru")} ₽
          </span>
        </div>

        <Link to={`/plugin/${plugin.id}`}>
          <Button className="w-full rust-gradient text-white border-0 hover:opacity-90 font-semibold">
            Подробнее
          </Button>
        </Link>
      </div>
    </div>
  );
}
