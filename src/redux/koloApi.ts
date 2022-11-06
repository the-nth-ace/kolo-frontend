import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Customer } from "../types";

// NOTE this is for fetching data from API. Post requests can be handled via traditional reducers?

export const koloApi = createApi({
  reducerPath: "koloApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query<Array<Customer>, Array<Customer>>({
      query: () => "customers",
    }),
  }),
});

export const { useGetAllCustomersQuery } = koloApi;
