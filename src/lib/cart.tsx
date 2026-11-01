import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  id: string;
  name: string;
  price?: number;
  qty: number;
};

type CartApi = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (item: { id: string; name: string; price?: number }) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const KEY = "memes-cart";
const CartContext = createContext<CartApi | null>(null);

function read(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((line) => line && typeof line.id === "string" && line.qty > 0);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(read());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const api = useMemo<CartApi>(() => {
    const count = lines.reduce((n, line) => n + line.qty, 0);
    const total = lines.reduce((n, line) => n + (line.price ?? 0) * line.qty, 0);
    return {
      lines,
      count,
      total,
      add: (item) => {
        setLines((current) => {
          const found = current.find((line) => line.id === item.id);
          if (found) {
            return current.map((line) => (line.id === item.id ? { ...line, qty: line.qty + 1 } : line));
          }
          return [...current, { id: item.id, name: item.name, price: item.price, qty: 1 }];
        });
      },
      setQty: (id, qty) => {
        setLines((current) =>
          qty <= 0 ? current.filter((line) => line.id !== id) : current.map((line) => (line.id === id ? { ...line, qty } : line)),
        );
      },
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider");
  return cart;
}
