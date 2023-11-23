import { create } from 'zustand'
import bruno from "../../public/bruno.jpg"
import brunoStory from "../../public/brunoStory.jpg"
import neto from "../../public/neto.jpg"
import netoStory from "../../public/netoStory.jpg"
import rinaldo from "../../public/rinaldo.jpg"
import rinaldoStory from "../../public/rinaldoStory.jpg"

export const useProductStore = create((set) => ({
  clients: [
    {id: 0, profilePic: bruno, story: brunoStory, name: "bruno"},
    {id: 1, profilePic: neto, story: netoStory, name: "neto"},
    {id: 2, profilePic: rinaldo, story: rinaldoStory, name: "rinaldo"}
  ],
  product: {},
  cart: 0,
  startIndex: 0,
  productDetails: false,
  story: false,
  setProduct: (item) => set(() => ({ product: item })),
  setStartIndex: (item) => set(() => ({ startIndex: item })),
  changeProductDetails: () => set((state) => ({ productDetails: !state.productDetails })),
  changeStory: () => set((state) => ({ story: !state.story })),
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}))