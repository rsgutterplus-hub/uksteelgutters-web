"use client";
import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

export interface CartItem {
  cartId: string;
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
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; cartId: string }
  | { type: "UPDATE"; cartId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "INIT"; items: CartItem[] };

function reducer(items: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "INIT": return action.items;
    case "ADD": {
      const i = items.findIndex(x => x.productId === action.item.productId && x.colour === action.item.colour && x.finish === action.item.finish);
      if (i >= 0) return items.map((x, idx) => idx === i ? { ...x, quantity: x.quantity + action.item.quantity } : x);
      return [...items, action.item];
    }
    case "REMOVE": return items.filter(x => x.cartId !== action.cartId);
    case "UPDATE": return items.map(x => x.cartId === action.cartId ? { ...x, quantity: Math.max(1, action.quantity) } : x);
    case "CLEAR": return [];
    default: return items;
  }
}

interface Ctx {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("uksg_cart");
      if (saved) dispatch({ type: "INIT", items: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("uksg_cart", JSON.stringify(items));
  }, [items]);

  return (
    <CartContext.Provider value={{
      items,
      addItem: item => dispatch({ type: "ADD", item }),
      removeItem: id => dispatch({ type: "REMOVE", cartId: id }),
      updateQty: (id, qty) => dispatch({ type: "UPDATE", cartId: id, quantity: qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      itemCount: items.reduce((s, i) => s + i.quantity, 0),
      subtotal: items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be within CartProvider");
  return ctx;
}
