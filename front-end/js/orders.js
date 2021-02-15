"use strict";
let createContainer = document.querySelector("#main__container");
let orders = document.createElement("article");
orders.className = "orders";
createContainer.appendChild(orders);

let paniertest = document.createElement("div");
paniertest.className = "orders__box text-center";
paniertest.innerHTML += `
    <div class="orders__box-order">N° de commande : XXXXXXXXXXXXxx</div>
    <div class="orders__box-date">Passée le : 31 Janvier 2021</div>
    <div class="orders__box-adresse">Livrée à : Jane Doe, 1 rue de la Rue</br>11111, PAYS</div>
    `;
orders.appendChild(paniertest);

let commande = JSON.parse(localStorage.getItem("teddy"));
commande.forEach((teddy) => {
	let affichertruc = document.createElement("div");
	affichertruc.className = "orders__box-details";
	affichertruc.innerHTML += `<h3>${teddy.name} x ${teddy.quantity}</h3>`;
	orders.appendChild(affichertruc);
});

let prixtotal = document.createElement("div");
prixtotal.className = "orders__box";
prixtotal.innerHTML += `Total de la commande : 39€`;
orders.appendChild(prixtotal);

let returnIndex = document.createElement("h2");
returnIndex.innerHTML += `<a href="index.html"><span class="fas fa-chevron-left"></span> Accueil</a>`;
createContainer.appendChild(returnIndex);
