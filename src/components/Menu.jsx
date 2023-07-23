import React from "react";
import { Pizza } from "./Pizza";
import { pizzaData } from "../data";
console.log(pizzaData)
export function Menu(){
    return(
        <main className="menu">
            <h2>Our menu</h2>
            {
             pizzaData.map(pizza=>{
                return(
                <Pizza image={pizza.photoName} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
                )
             })   
            }
            
        </main>
    )
}