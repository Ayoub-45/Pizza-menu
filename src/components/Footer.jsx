import React from "react";
export function Footer(){
    return (
        <footer className="footer">{new Date().toLocaleTimeString()} we're currently open.</footer>
    )
}