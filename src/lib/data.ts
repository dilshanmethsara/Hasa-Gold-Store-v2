export type Game = {
  id: string;
  name: string;
  publisher: string;
  currency: string;
  tagline: string;
  accent: string;
  initials: string;
  emoji: string;
  image: string;
};

export const games: Game[] = [
  {
    id: "free-fire",
    name: "Free Fire",
    publisher: "Garena",
    currency: "Diamonds",
    tagline: "Survive. Loot. Conquer.",
    accent: "from-orange-400 to-rose-500",
    initials: "FF",
    emoji: "🔥",
    image: "/free fire.jpg",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    publisher: "Tencent",
    currency: "UC",
    tagline: "Battle royale, perfected.",
    accent: "from-amber-400 to-yellow-600",
    initials: "PM",
    emoji: "🎯",
    image: "/pubg.png",
  },
  {
    id: "cod-mobile",
    name: "Call of Duty Mobile",
    publisher: "Activision",
    currency: "CP",
    tagline: "Modern combat in your pocket.",
    accent: "from-slate-500 to-zinc-800",
    initials: "CD",
    emoji: "🪖",
    image: "/App_Icon_CODM_Global.webp",
  },
  {
    id: "blood-strike",
    name: "Blood Strike",
    publisher: "NetEase",
    currency: "Gold",
    tagline: "Fast. Brutal. Tactical.",
    accent: "from-red-500 to-rose-700",
    initials: "BS",
    emoji: "⚔️",
    image: "/blood-strike.jpg",
  },
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    publisher: "Moonton",
    currency: "Diamonds",
    tagline: "5v5 MOBA on the go.",
    accent: "from-indigo-500 to-blue-700",
    initials: "ML",
    emoji: "🛡️",
    image: "/mobile legends.jpg",
  },
];

export type Pack = { id: string; amount: number; bonus?: number; price: number; popular?: boolean };

export const packagesByGame: Record<string, Pack[]> = {
  "free-fire": [
    { id: "ff-1", amount: 100, price: 0.99 },
    { id: "ff-2", amount: 310, bonus: 31, price: 2.99, popular: true },
    { id: "ff-3", amount: 520, bonus: 52, price: 4.99 },
    { id: "ff-4", amount: 1060, bonus: 106, price: 9.99 },
    { id: "ff-5", amount: 2180, bonus: 218, price: 19.99 },
    { id: "ff-6", amount: 5600, bonus: 560, price: 49.99 },
  ],
  "pubg-mobile": [
    { id: "pm-1", amount: 60, price: 0.99 },
    { id: "pm-2", amount: 325, price: 4.99, popular: true },
    { id: "pm-3", amount: 660, bonus: 60, price: 9.99 },
    { id: "pm-4", amount: 1800, bonus: 300, price: 24.99 },
    { id: "pm-5", amount: 3850, bonus: 850, price: 49.99 },
    { id: "pm-6", amount: 8100, bonus: 2100, price: 99.99 },
  ],
  "cod-mobile": [
    { id: "cd-1", amount: 80, price: 0.99 },
    { id: "cd-2", amount: 400, price: 4.99 },
    { id: "cd-3", amount: 800, bonus: 80, price: 9.99, popular: true },
    { id: "cd-4", amount: 2000, bonus: 400, price: 24.99 },
    { id: "cd-5", amount: 4000, bonus: 1000, price: 49.99 },
    { id: "cd-6", amount: 10000, bonus: 3000, price: 99.99 },
  ],
  "blood-strike": [
    { id: "bs-1", amount: 100, price: 0.99 },
    { id: "bs-2", amount: 500, bonus: 50, price: 4.99 },
    { id: "bs-3", amount: 1000, bonus: 150, price: 9.99, popular: true },
    { id: "bs-4", amount: 2500, bonus: 500, price: 24.99 },
  ],
  "mobile-legends": [
    { id: "ml-1", amount: 86, price: 1.49 },
    { id: "ml-2", amount: 172, price: 2.99 },
    { id: "ml-3", amount: 344, bonus: 36, price: 5.99, popular: true },
    { id: "ml-4", amount: 706, bonus: 100, price: 11.99 },
    { id: "ml-5", amount: 1412, bonus: 200, price: 23.99 },
    { id: "ml-6", amount: 3688, bonus: 600, price: 59.99 },
  ],
};

export type Order = {
  id: string;
  game: string;
  pack: string;
  playerId: string;
  amount: number;
  total: number;
  status: "completed" | "pending" | "failed";
  date: string;
};

export const recentOrders: Order[] = [
  { id: "HG-10421", game: "Free Fire", pack: "310 Diamonds", playerId: "98123421", amount: 310, total: 2.99, status: "completed", date: "2 hours ago" },
  { id: "HG-10420", game: "PUBG Mobile", pack: "660 UC", playerId: "5234819203", amount: 660, total: 9.99, status: "pending", date: "5 hours ago" },
  { id: "HG-10419", game: "Mobile Legends", pack: "344 Diamonds", playerId: "12839102 (2104)", amount: 344, total: 5.99, status: "completed", date: "Yesterday" },
  { id: "HG-10418", game: "COD Mobile", pack: "800 CP", playerId: "55671201", amount: 800, total: 9.99, status: "completed", date: "2 days ago" },
  { id: "HG-10417", game: "Blood Strike", pack: "1000 Gold", playerId: "3349281", amount: 1000, total: 9.99, status: "failed", date: "3 days ago" },
];

export const adminUsers = [
  { id: "U-2841", name: "Hassan Ali", email: "hassan@example.com", orders: 24, spent: 312.4, status: "active" },
  { id: "U-2840", name: "Aisha Khan", email: "aisha.k@example.com", orders: 12, spent: 184.0, status: "active" },
  { id: "U-2839", name: "Marcus Lee", email: "marcus@example.com", orders: 41, spent: 612.9, status: "vip" },
  { id: "U-2838", name: "Sara Iqbal", email: "sara.i@example.com", orders: 3, spent: 24.5, status: "active" },
  { id: "U-2837", name: "Daniel Cruz", email: "danc@example.com", orders: 0, spent: 0, status: "blocked" },
];

export const revenueSeries = [
  { d: "Mon", v: 1240 },
  { d: "Tue", v: 1680 },
  { d: "Wed", v: 1420 },
  { d: "Thu", v: 2100 },
  { d: "Fri", v: 2840 },
  { d: "Sat", v: 3120 },
  { d: "Sun", v: 2680 },
];

export function getGame(id: string) {
  return games.find((g) => g.id === id);
}
