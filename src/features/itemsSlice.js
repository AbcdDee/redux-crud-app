import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    setItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem, setItems } = itemsSlice.actions;

export const selectItems = (state) => state.items;

export default itemsSlice.reducer;