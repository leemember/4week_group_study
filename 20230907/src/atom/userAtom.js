import { atom } from 'recoil'

export const userAtom = atom({
  key: 'auth/user',
  default: null,
})
