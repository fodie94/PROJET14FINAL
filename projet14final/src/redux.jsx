// redux.jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});

export default store;
