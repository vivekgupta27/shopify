import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
export const Product=createContext();
const Context = (props) => {
    const [data,setData]=useState([])
    useEffect(() => {
       
       try {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setData(response.data));
       } catch (error) {
        console.log(error)
       } 
    },[])
  return (
    <Product.Provider value={{data,setData}}>{props.children}</Product.Provider>
  )
}

export default Context