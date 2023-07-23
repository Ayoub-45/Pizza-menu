import React from "react";
export function Pizza({name,ingredients,price,soldOut,image}) {
    return (
        <li className={`pizza ${soldOut && "sold-out"}`}>
            <img src={image} alt="Pizza" />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut?"SOLD OUT":<span>{price}$</span>}</span>
            </div>
        </li>
    );
}
