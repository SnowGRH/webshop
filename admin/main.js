import {ADATOKLISTA} from "../adatok.js"; 
import {init} from "../nav_bar.js";

$(function () {
    const LISTA = [
        { link: "admin.html", tag: "Admin" },
        { link: "../index.html", tag: "User" },
        { link: "../kosar/kosar.html", tag: "Kosar" },
      ];
    init(LISTA)
})