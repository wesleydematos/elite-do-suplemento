import { create } from 'zustand'

export const useProductStore = create((set) => ({
  product: {},
  setProduct: (item) => set(() => ({ product: item })),
  cart: 0,
  productDetails: false,
  changeProductDetails: () => set((state) => ({ productDetails: !state.productDetails })),
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}))