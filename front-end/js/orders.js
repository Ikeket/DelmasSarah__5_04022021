"use strict";

import { cart, createContainer, sumBuying, user } from "./utils.js";
console.log(user);
let orderJSON = JSON.parse(localStorage.getItem("order"));
console.log(orderJSON);

let orders = document.createElement("article");
orders.className = "orders";
createContainer.appendChild(orders);

let order = document.createElement("div");
order.className = "orders__box text-center";
order.innerHTML += `
    <div class="orders__box-order">N° de commande : ${orderJSON.orderId}</div>
    <div class="orders__box-date">Passée le : 31 Janvier 2021</div> 
    <div class="orders__box-adresse">Livrée chez ${orderJSON.contact.firstName} ${orderJSON.contact.lastName} au ${orderJSON.contact.address} à  ${orderJSON.contact.city}</div>
    <div class="orders__box-email">Email de contact : ${orderJSON.contact.email}</div>
    `;
orders.appendChild(order); // changer la date pour mettre celle du jour

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
