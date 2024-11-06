import { create } from 'zustand'

type Store = {
  keywords:string[]
  setKeywords:(value:string[]) => void
}

export const useStore = create<Store>()((set) => ({
 keywords:[],
 setKeywords:(value)=>set(()=>({
    keywords:value
 }))
}))

