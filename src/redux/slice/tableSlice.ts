import {TableDTO} from "../../types/tableDTO";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TableDTO = {
  id: '',
  name: '',
  email: '',
  access: false,
  lastName: '',
  birthDate: '',
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {

  }
})
