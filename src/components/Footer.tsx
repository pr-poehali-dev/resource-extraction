import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rust-gradient rounded flex items-center justify-center">
                <Icon name="Puzzle" size={14} className="text-white" />
              </div>
              <span className="font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>
                RUST<span className="rust-text">PLUGINS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Качественные плагины для Rust серверов. Поддержка, обновления и лицензии включены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Навигация</h4>
            <ul className="space-y-2.5">
              {[["Главная", "/"], ["Каталог", "/catalog"], ["FAQ", "/faq"]].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Поддержка</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                  <Icon name="MessageCircle" size={13} /> Discord сервер
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                  <Icon name="Mail" size={13} /> support@rustplugins.ru
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                  <Icon name="FileText" size={13} /> Документация
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© 2026 RustPlugins. Все права защищены.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
