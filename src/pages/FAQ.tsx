import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { faqs } from "@/data/plugins";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <p className="text-sm text-orange-400 font-medium mb-2 uppercase tracking-wider">Вопросы и ответы</p>
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            FAQ
          </h1>
          <p className="text-muted-foreground">
            Если не нашёл ответ — напиши нам в Discord, ответим быстро.
          </p>
        </div>

        <div className="space-y-3 mb-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`metal-surface rounded-lg overflow-hidden transition-all ${
                open === i ? "border-orange-500/40" : ""
              }`}
              style={{ borderColor: open === i ? "rgba(249, 115, 22, 0.4)" : undefined }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm leading-snug">{faq.question}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="metal-surface rounded-xl p-8 text-center">
          <div className="w-12 h-12 rust-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageCircle" size={22} className="text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            Остались вопросы?
          </h2>
          <p className="text-muted-foreground text-sm mb-5">
            Заходи в наш Discord — отвечаем в течение нескольких часов
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="rust-gradient text-white border-0 hover:opacity-90 font-semibold">
                <Icon name="MessageCircle" size={15} className="mr-2" />
                Написать в Discord
              </Button>
            </a>
            <Link to="/catalog">
              <Button variant="outline" className="font-medium">
                Смотреть каталог
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
