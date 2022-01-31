import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}`);
  console.log(res.data);
  return res.data;
})

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    charPending: false,
    charReject: false
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.charPending = true; 
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      //console.log(action.payload);
      state.items = action.payload;
      state.charPending = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.charPending = false;
      state.charReject = action.error.message;
    }
  }
})

export default charactersSlice.reducer;