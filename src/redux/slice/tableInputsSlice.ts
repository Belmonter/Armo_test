import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TableInputs {
  id: boolean,
  name: boolean,
  email: boolean,
  access: boolean,
  lastName: boolean,
  birthDate: boolean,
}

const initialState: TableInputs = {
  id: true,
  name: true,
  email: true,
  access: true,
  lastName: true,
  birthDate: true
}


export const tableSlice = createSlice({
  name: 'tableInputs',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<TableInputs>) {
      state = {...action.payload}
    }
  }
})

export const tableInputsReducer = tableSlice.reducer;
export const {setStatus} = tableSlice.actions;
