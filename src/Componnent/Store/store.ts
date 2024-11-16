import { create } from "zustand";

type Keyword = {
  id: number;
  keyword: string;
};

type Store = {
  keywords: Keyword[];
  setKeywords: (value: Keyword[]) => void;
  articles: [];
  setArticles: (value: []) => void;
};

export const useStore = create<Store>()((set) => ({
  keywords: [],
  setKeywords: (value) =>
    set((state) => ({
      keywords: [...state.keywords, ...value],
    })),

  articles: [],
  setArticles: (value) =>
    set((state) => ({
      articles: value,
    })),
}));
