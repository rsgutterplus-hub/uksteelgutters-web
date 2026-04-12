"use client";
import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

export interface QuoteItem {
  quoteId: string;
  productId: string;
  name: string;
  system: string;
  colour: string;
  finish: string;
  image: string;
  unitPrice: number;
  unit: string;
  quantity: number;
}

type Action =
  | { type: "ADD"; item: QuoteItem }
  | { type: "REMOVE"; quoteId: string }
  | { type: "UPDATE"; quoteId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "INIT"; items: QuoteItem[] };

function reducer(items: QuoteItem[], action: Action): QuoteItem[] {
  switch (action.type) {
    case "INIT": return action.items;
    case "ADD": {
      const i = items.findIndex(x => x.productId === action.item.productId && x.colour === action.item.colour && x.finish === action.item.finish);
      if (i >= 0) return items.map((x, idx) => idx === i ? { ...x, quantity: x.quantity + action.item.quantity } : x);
      return [...items, action.item];
    }
    case "REMOVE": return items.filter(x => x.quoteId !== action.quoteId);
    case "UPDATE": return items.map(x => x.quoteId === action.quoteId ? { ...x, quantity: Math.max(1, action.quantity) } : x);
    case "CLEAR": return [];
    default: return items;
  }
}

interface Ctx {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearQuote: () => void;
  itemCount: number;
}

const QuoteContext = createContext<Ctx | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("uksg_quote");
      if (saved) dispatch({ type: "INIT", items: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("uksg_quote", JSON.stringify(items));
  }, [items]);

  return (
    <QuoteContext.Provider value={{
      items,
      addItem: item => dispatch({ type: "ADD", item }),
      removeItem: id => dispatch({ type: "REMOVE", quoteId: id }),
      updateQty: (id, qty) => dispatch({ type: "UPDATE", quoteId: id, quantity: qty }),
      clearQuote: () => dispatch({ type: "CLEAR" }),
      itemCount: items.reduce((s, i) => s + i.quantity, 0),
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be within QuoteProvider");
  return ctx;
}
