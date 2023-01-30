import {TableDTO} from "../../types/tableDTO";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: { data: TableDTO[] } = {
  data: [],
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<TableDTO[]>) {
      state.data = [...action.payload]
    }
  }
})

export const tableReducer = tableSlice.reducer;
export const {setData} = tableSlice.actions;
