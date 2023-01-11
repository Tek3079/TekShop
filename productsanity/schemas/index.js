import Banner from "./Banner"
import Product from "./Product"
export const schemaTypes = [Product,Banner]

/*
import client from "./client";
import urlFor from "./imageBuilder";


import React from 'react'
import { useState, useEffect } from "react";

const Connectsanity = () => {
 const [data, setData]= useState([]);

 

 useEffect (()=> {
    client.fetch(
        '*[_type == "banner"]'
    ).then((data)=> setData(data)).catch(console.error);
   
//console.log(urlFor(data[0].image));
    console.log((data[0]));

 }, []
 
 
 );



  return (
    <div>
        <img src = {urlFor(data[0].image)}></img>
    </div>
  )
}

export default Connectsanity*/