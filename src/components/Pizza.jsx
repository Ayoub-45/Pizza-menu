import React from "react";
export function Pizza(props) {
    if (props.soldOut) return null;
    return (
        <li className="pizza">
            <img src={props.image} alt="Pizza" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <p>{props.price}$</p>
            </div>
        </li>
    );
}
