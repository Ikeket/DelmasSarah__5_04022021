"use strict";

import { cart, createContainer, sumBuying, userData } from "./utils.js";

let orders = document.createElement("article");
orders.className = "orders";
orders.innerHTML += `<h1>Mes commandes</h1>`;
createContainer.appendChild(orders);

let order = document.createElement("div");
order.className = "orders__box text-center";
order.innerHTML += `
    <div class="orders__box-order">N° de commande : XXXXXXXXXXXXxx</div>
    <div class="orders__box-date">Passée le : 31 Janvier 2021</div>
    <div class="orders__box-adresse">Livrée à : ${userData.name}</br>${userData.address}</div>
    `;
orders.appendChild(order);

cart.forEach((teddy) => {
	let affichertruc = document.createElement("div");
	affichertruc.className = "orders__box-details";
	affichertruc.innerHTML += `<h3>${teddy.name} x ${teddy.quantity}</h3>`;
	orders.appendChild(affichertruc);
});

let totalPrice = document.createElement("div");
totalPrice.className = "orders__box";
totalPrice.innerHTML += `Total de la commande : ${sumBuying}€`;
orders.appendChild(totalPrice);

let returnIndex = document.createElement("h2");
returnIndex.innerHTML += `<a href="index.html"><span class="fas fa-chevron-left"></span> Accueil</a>`;
createContainer.appendChild(returnIndex);
