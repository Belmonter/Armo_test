import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {TableDTO} from "../../types/tableDTO";

export const tableApi = createApi({
  reducerPath: 'api/table',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://retoolapi.dev/KLjlBt',
  }),
  endpoints: (build) => ({
    getTableData: build.query<TableDTO[], void>({
      query: () => '/ov_test',
    }),
  }),
})

export const {useGetTableDataQuery} = tableApi
