import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Singleproduct from "../Pages/Sigleproduct/Singleproduct";



export const furniroeCom = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
       baseUrl : import.meta.env.VITE_BASE_API_URL
    }),
    endpoints : (builder) => ({
     register:builder.mutation({
        query: (data) => ({
            url: "/user/create",
            method: "POST",
            body: data
        })
     }),
     resendemail:builder.mutation({
      query: (data) => {
         return{
          url: "/user/resendmail",
          method: "POST",
          body: data
      }
   }
   }),
     login:builder.mutation({
        query: (data) => ({
            url: "/user/login",
            method: "POST",
            body: data
        })
     }),
     logout:builder.mutation({
        query: () => ({
            url: "/user/logout",
            method: "POST",
           headers:{
            "Authorization" :JSON.parse(localStorage.getItem("e-com")).
         accessToken
           }
        })
     }),
     products: builder.query({
      query: () => "/products",
     }),
     Singleproduct: builder.query({
      query: (slug) => `/products/${slug}`,
     }),
    })
})

export const {useRegisterMutation,useResendemailMutation, useLoginMutation , useLogoutMutation, useProductsQuery,useSingleproductQuery} = furniroeCom