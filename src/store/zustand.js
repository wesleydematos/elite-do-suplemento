import { create } from 'zustand'

export const useProductStore = create((set) => ({
  allProducts: [],
  clients: [
    {id: 0, profilePic: "https://i.imgur.com/IWbVFg7.jpg", story: "https://i.imgur.com/DYderUJ.jpg", name: "bruno"},
    {id: 1, profilePic: "https://i.imgur.com/clVboQp.jpg", story: "https://i.imgur.com/x83cUYo.jpg", name: "neto"},
    {id: 2, profilePic: "https://i.imgur.com/i0GDjBW.jpg", story: "https://i.imgur.com/uiCbG29.jpg", name: "rinaldo"}
  ],
  product: {},
  cart: 0,
  startIndex: 0,
  productDetails: false,
  story: false,
  exclude: false,
  edit: false,
  productId: 0,
  setAllProducts: (item) => set(() => ({ allProducts: item })),
  setProduct: (item) => set(() => ({ product: item })),
  setStartIndex: (item) => set(() => ({ startIndex: item })),
  changeProductDetails: () => set((state) => ({ productDetails: !state.productDetails })),
  changeStory: () => set((state) => ({ story: !state.story })),
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
  setExclude: (item) => set(() => ({ exclude: item })),
  setEdit: (item) => set(() => ({ edit: item })),
  setProductId: (item) => set(() => ({ productId: item }))
}))