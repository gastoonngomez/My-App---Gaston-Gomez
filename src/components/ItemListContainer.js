
import React from 'react';
import ItemCount from './ItemCount'


function ItemListContainer({greeting}){


   const onAdd = (count)=>{

    console.log(count)
   } 
    return(
        <div>
            
    <h1>{greeting}</h1>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
    
    )
}


export default ItemListContainer;