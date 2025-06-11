import {createElement} from "/helpers/elements-utils.js";
"use strict"



const ws = new WebSocket("ws://localhost:3000");
ws.onopen = () => (console.log("connected"))
ws.onmessage = (msg) => (console.log(msg))


function renderApp(e){
    const app = document.getElementById("app");
    app.appendChild(createElement("textarea", [],"tekst"))
}

document.addEventListener("DOMContentLoaded", e => renderApp(e));


