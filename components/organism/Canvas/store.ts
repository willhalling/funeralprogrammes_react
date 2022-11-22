import create from 'zustand'

import { BOOKLET } from '../../../constants/booklet'

export const useBookletStore = create((set, get: any) => ({
  booklet: {
    booklet: BOOKLET,
  },
  getData: () => {
    return get()?.state
  },
}))
