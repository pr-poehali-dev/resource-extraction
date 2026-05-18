export interface Plugin {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  tags: string[];
  version: string;
  lastUpdate: string;
  downloads: number;
  rating: number;
  reviewCount: number;
  features: string[];
  requirements: string[];
  image: string;
  badge?: "Хит" | "Новинка" | "Топ";
}

export const plugins: Plugin[] = [
  {
    id: "rustguard-pro",
    name: "RustGuard Pro",
    description: "Продвинутая система защиты от читеров с автобаном и логированием всех действий.",
    longDescription: "RustGuard Pro — самый надёжный плагин для защиты вашего сервера Rust. Автоматически выявляет подозрительное поведение, телепорт-хаки, speedhack и оружейные аномалии. Интегрируется с Discord для мгновенных уведомлений администраторам.",
    price: 1490,
    category: "Безопасность",
    tags: ["Античит", "Безопасность", "Автобан"],
    version: "3.2.1",
    lastUpdate: "2026-05-10",
    downloads: 4821,
    rating: 4.9,
    reviewCount: 312,
    features: [
      "Автоматическое обнаружение speedhack и aimbот",
      "Discord-уведомления о банах",
      "Логирование всех действий игроков",
      "Белый список для доверенных игроков",
      "Настройка порогов срабатывания",
      "Статистика нарушений в реальном времени"
    ],
    requirements: ["Oxide/uMod 2.0+", "Rust Experimental"],
    image: "https://cdn.poehali.dev/projects/placeholder/rustguard.jpg",
    badge: "Хит"
  },
  {
    id: "economy-plus",
    name: "Economy Plus",
    description: "Полноценная экономическая система с магазином, банком и торговлей между игроками.",
    longDescription: "Economy Plus создаёт живую экономику на вашем сервере. Игроки могут зарабатывать монеты, торговать, открывать магазины и брать кредиты в банке. Полностью настраиваемые курсы и предметы.",
    price: 990,
    category: "Экономика",
    tags: ["Экономика", "Магазин", "Банк"],
    version: "5.1.0",
    lastUpdate: "2026-04-28",
    downloads: 7230,
    rating: 4.7,
    reviewCount: 589,
    features: [
      "Виртуальная валюта",
      "Игровой магазин с GUI",
      "Банк с процентами",
      "P2P торговля между игроками",
      "Рейтинг богатейших игроков",
      "Экспорт статистики"
    ],
    requirements: ["Oxide/uMod 2.0+"],
    image: "https://cdn.poehali.dev/projects/placeholder/economy.jpg",
    badge: "Топ"
  },
  {
    id: "raid-alert",
    name: "Raid Alert",
    description: "Мгновенные уведомления о рейде на вашу базу прямо в Discord и в игровой чат.",
    longDescription: "Raid Alert отслеживает взрывы, стрельбу из дробовиков по дверям и авторизованных игроков рядом с вашим шкафом. Как только начинается рейд — вы получаете уведомление немедленно.",
    price: 690,
    category: "Уведомления",
    tags: ["Рейд", "Discord", "Уведомления"],
    version: "2.0.4",
    lastUpdate: "2026-05-01",
    downloads: 9512,
    rating: 4.8,
    reviewCount: 843,
    features: [
      "Discord Webhook интеграция",
      "Определение типа атаки",
      "GPS-координаты рейда",
      "История рейдов с таймштампами",
      "Настройка радиуса мониторинга",
      "Поддержка нескольких баз"
    ],
    requirements: ["Oxide/uMod 2.0+"],
    image: "https://cdn.poehali.dev/projects/placeholder/raidalert.jpg",
    badge: "Новинка"
  },
  {
    id: "buildmaster",
    name: "BuildMaster",
    description: "Расширенные инструменты строительства: копирование построек, симметрия, шаблоны баз.",
    longDescription: "BuildMaster даёт строителям суперспособности. Копируй и вставляй постройки, используй симметрию при строительстве, сохраняй шаблоны баз и разворачивай их в один клик.",
    price: 1190,
    category: "Строительство",
    tags: ["Строительство", "Инструменты", "Шаблоны"],
    version: "4.3.2",
    lastUpdate: "2026-03-15",
    downloads: 3654,
    rating: 4.6,
    reviewCount: 201,
    features: [
      "Копирование и вставка строений",
      "Осевая симметрия",
      "Библиотека шаблонов баз",
      "Отмена последних действий",
      "Массовое обновление материалов",
      "Импорт/экспорт шаблонов"
    ],
    requirements: ["Oxide/uMod 2.0+"],
    image: "https://cdn.poehali.dev/projects/placeholder/buildmaster.jpg"
  },
  {
    id: "clan-wars",
    name: "Clan Wars",
    description: "Система кланов с войнами, рейтингом, наградами и кланхоллом.",
    longDescription: "Clan Wars превращает ваш сервер в арену клановых войн. Игроки создают кланы, объявляют войны, сражаются за территории и получают уникальные награды.",
    price: 1790,
    category: "Игровой процесс",
    tags: ["Кланы", "PvP", "Рейтинг"],
    version: "6.0.1",
    lastUpdate: "2026-05-05",
    downloads: 5847,
    rating: 4.9,
    reviewCount: 423,
    features: [
      "Создание и управление кланами",
      "Объявление войны другим кланам",
      "Захват территорий",
      "Таблица лидеров кланов",
      "Клановые награды и звания",
      "Кланхолл с хранилищем"
    ],
    requirements: ["Oxide/uMod 2.0+", "Economy Plus (рекомендуется)"],
    image: "https://cdn.poehali.dev/projects/placeholder/clanwars.jpg",
    badge: "Хит"
  },
  {
    id: "loot-plus",
    name: "Loot Plus",
    description: "Настройка лута в ящиках, дронах и NPC. Редкие предметы, кастомные таблицы.",
    longDescription: "Loot Plus даёт полный контроль над лутом на сервере. Настраивай шансы выпадения, добавляй кастомные предметы, создавай тематические ящики.",
    price: 790,
    category: "Лут",
    tags: ["Лут", "Настройка", "Предметы"],
    version: "3.5.0",
    lastUpdate: "2026-04-10",
    downloads: 6120,
    rating: 4.5,
    reviewCount: 334,
    features: [
      "Настройка таблиц лута",
      "Редкие и легендарные предметы",
      "Тематические ящики",
      "Лут для ивентов",
      "Поддержка NPC и дронов",
      "Визуальный редактор таблиц"
    ],
    requirements: ["Oxide/uMod 2.0+"],
    image: "https://cdn.poehali.dev/projects/placeholder/lootplus.jpg"
  }
];

export const reviews = [
  {
    id: 1,
    author: "Феникс",
    avatar: "Ф",
    plugin: "RustGuard Pro",
    rating: 5,
    text: "Поставил на сервер 3 месяца назад — читеров стало в разы меньше. Дискорд уведомления работают моментально. Поддержка отвечает быстро.",
    date: "2026-05-12"
  },
  {
    id: 2,
    author: "SteelWolf",
    avatar: "S",
    plugin: "Economy Plus",
    rating: 5,
    text: "Лучшая экономика для раст сервера. Игроки стали дольше задерживаться, торговля оживила сервер. Настройка заняла 20 минут.",
    date: "2026-05-08"
  },
  {
    id: 3,
    author: "Кракен",
    avatar: "К",
    plugin: "Clan Wars",
    rating: 5,
    text: "Онлайн вырос в 2 раза после установки. Игроки реально борются за территории, сервер живой. Спасибо разработчику!",
    date: "2026-04-30"
  },
  {
    id: 4,
    author: "NightRaider",
    avatar: "N",
    plugin: "Raid Alert",
    rating: 4,
    text: "Работает отлично, уведомления приходят мгновенно. Единственное — хотелось бы настройку звука в Discord. В целом доволен.",
    date: "2026-04-25"
  },
  {
    id: 5,
    author: "Механик",
    avatar: "М",
    plugin: "BuildMaster",
    rating: 5,
    text: "Копирование баз — это вообще магия. Сохранил шаблон, разворачиваю за 10 секунд. Обязательный плагин для билд-серверов.",
    date: "2026-04-18"
  },
  {
    id: 6,
    author: "GhostRust",
    avatar: "G",
    plugin: "Loot Plus",
    rating: 4,
    text: "Гибкая настройка лута, редкие предметы добавляют интерес к фармингу. Хочу ещё больше готовых шаблонов в следующем обновлении.",
    date: "2026-04-10"
  }
];

export const faqs = [
  {
    question: "Как получить плагин после оплаты?",
    answer: "После успешной оплаты вы получаете лицензионный ключ на email. Ключ привязывается к вашему серверу при первом запуске плагина."
  },
  {
    question: "На сколько серверов действует лицензия?",
    answer: "Стандартная лицензия действует на 1 сервер. Если нужно несколько серверов — напишите нам, сделаем скидку на мультисерверную лицензию."
  },
  {
    question: "Какую версию Oxide/uMod нужно иметь?",
    answer: "Все плагины работают на Oxide/uMod 2.0 и выше. Убедитесь, что ваш сервер использует актуальную версию Rust Experimental."
  },
  {
    question: "Есть ли поддержка после покупки?",
    answer: "Да! После покупки вы получаете доступ к нашему Discord-каналу поддержки. Отвечаем в течение 24 часов в рабочие дни."
  },
  {
    question: "Можно ли вернуть деньги?",
    answer: "Мы предлагаем возврат в течение 3 дней после покупки, если плагин не работает на вашем сервере и мы не смогли устранить проблему."
  },
  {
    question: "Как долго действуют обновления?",
    answer: "Все обновления плагина бесплатны в течение 12 месяцев с даты покупки. После этого можно продлить поддержку по сниженной цене."
  }
];

export const categories = ["Все", "Безопасность", "Экономика", "Уведомления", "Строительство", "Игровой процесс", "Лут"];
