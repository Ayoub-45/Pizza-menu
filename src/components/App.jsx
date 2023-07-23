import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import "../styles.css"
export function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
