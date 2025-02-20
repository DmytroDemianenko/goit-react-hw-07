import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./contactsOps";
const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducer: {},
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filter.filter;
export default filterSlice.reducer;
