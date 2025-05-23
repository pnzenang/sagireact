import { createSlice } from '@reduxjs/toolkit';

const themes = { corporate: 'corporate', dark: 'dark' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.corporate;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dark, corporate } = themes;
      state.theme = state.theme === dark ? corporate : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
