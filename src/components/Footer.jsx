import React from "react";
import { Order } from "./Order";
export function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return <footer className="footer">{isOpen && <Order closeHour={closeHour} openHour={openHour}/>}</footer>;
}
