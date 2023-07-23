import React from "react";
import { Pizza } from "./Pizza";
import { pizzaData } from "../data";
console.log(pizzaData);
export function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {pizzaData.length > 0 ? (
           <>
           <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
            </p>
                <ul className="pizzas">
                    {pizzaData.map((pizza, index) => {
                        return (
                            <Pizza
                                image={pizza.photoName}
                                name={pizza.name}
                                ingredients={pizza.ingredients}
                                price={pizza.price}
                                key={index}
                                soldOut={pizza.soldOut}
                            />
                        );
                    })}
                </ul>
            </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later :)
                </p>
            )}
        </main>
    );
}
