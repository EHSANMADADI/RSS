import { create } from 'zustand'

type Keyword = {
  id: number
  keyword: string
}

type Store = {
  keywords: Keyword[]
  setKeywords: (value: Keyword[]) => void
}

export const useStore = create<Store>()((set) => ({
  keywords: [],
  setKeywords: (value) =>
    set((state) => ({
      keywords: [...state.keywords, ...value]
    }))
}))
