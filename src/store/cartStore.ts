// stores/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  changeQuantity: (productId: number, action: "up" | "down") => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        const currentCart = get().cart;
        const existingProduct = currentCart.find(
          (item) => item.id === product.id
        );
        if (existingProduct) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            ),
          }));
        } else {
          set((state) => ({
            cart: [
              ...state.cart,
              { ...product, quantity: product.quantity || 1 },
            ],
          }));
        }
      },
      removeFromCart: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),
      updateQuantity: (productId: number, newQuantity: number) =>
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === productId
              ? { ...product, quantity: newQuantity }
              : product
          ),
        })),
      changeQuantity: (productId: number, action: "up" | "down") =>
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === productId
              ? {
                  ...product,
                  quantity:
                    action === "up"
                      ? product.quantity + 1
                      : product.quantity > 1
                      ? product.quantity - 1
                      : product.quantity,
                }
              : product
          ),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
