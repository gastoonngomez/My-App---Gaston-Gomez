import React from 'react';
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount ]= useState(initial)

function Sumar(){
if(count<5){ 
    setCount(count + 1)
}
}

function Restar(){
if(count>1){
setCount( count - 1)
}
}

const agregarCarrito=()=> {

    onAdd(count)

}



    return (
<div>

    Hola, agregue el producto en el carrito
    <label>{count}</label>
    <button onClick={Sumar}>+</button>
    <button onClick={Restar}>-</button>
    <button onClick={agregarCarrito}>agregarCarrito</button>


</div>


    )
}

export default ItemCount;