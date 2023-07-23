import React from "react";
export function Pizza(props) {
    return (
        <div>
            <img src={props.image} alt="Pizza" />
            <h3>{props.name}</h3>
             <p>{props.ingredients}</p>
            <p>{props.price}$</p>
        </div>
    );
}
 