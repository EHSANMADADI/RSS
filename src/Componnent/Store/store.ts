import { create } from "zustand";

type Keyword = {
  id: number;
  keyword: string;
};
type articles={
  link:string;
  source:string;
  title:string;
  published:string
  id:number
}

type Store = {
  keywords: Keyword[];
  setKeywords: (value: Keyword[]) => void;
  articles:articles[];
  setArticles: (value:articles[]) => void;
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
      articles: [...value],
    })),
}));
