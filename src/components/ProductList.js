import React from "react";
import { Product } from "./Product";

export function ProductList(props){
    return (
      props.productList.length > 0 ?
      props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} idx={i} removeItem={props.removeItem}/>
      })
      :
      <h1>No Product exist in the card</h1>
    )   
}