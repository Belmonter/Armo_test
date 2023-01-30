import {configureStore} from "@reduxjs/toolkit";
import {tableReducer} from "../slice/tableSlice";
import {tableApi} from "../api/tableApi";
import {tableInputsReducer} from "../slice/tableInputsSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    tableInputs: tableInputsReducer,
    [tableApi.reducerPath]: tableApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    tableApi.middleware,
  ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
