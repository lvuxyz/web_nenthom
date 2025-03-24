import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isCartOpen: boolean
  isMenuOpen: boolean
  isSearchOpen: boolean
  theme: 'light' | 'dark'
}

const initialState: UIState = {
  isCartOpen: false,
  isMenuOpen: false,
  isSearchOpen: false,
  theme: 'light',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
  },
})

export const { toggleCart, toggleMenu, toggleSearch, setTheme } = uiSlice.actions
export default uiSlice.reducer 