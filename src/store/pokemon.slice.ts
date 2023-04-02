import { createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../models/pokemon";

interface IState {
  activePokemon: IPokemon | null;
}

const initialState: IState = {
  activePokemon: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setActivePokemon: (state, action) => {
      state.activePokemon = action.payload;
    },
  },
});
export const { setActivePokemon } = pokemonSlice.actions;
export default pokemonSlice;
