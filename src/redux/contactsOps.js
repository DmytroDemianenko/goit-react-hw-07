import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAll } from "../services/api.jsx";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await fetchAll(`/contacts`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (body, thunkApi) => {
//     try {
//       const data = await searchProducts(body);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const data = await searchProducts(id);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
