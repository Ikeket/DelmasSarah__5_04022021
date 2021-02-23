"use strict";

import { createContainer } from "./utils.js";

let productBox = document.createElement("article");
productBox.className = "product";
createContainer.appendChild(productBox);

/*
FR : création de l'ensemble des vues produits
EN : création of all product views
*/
fetch(`http://localhost:3000/api/teddies`)
	.then((response) => response.json())
	.then((product) => {
		let teddies = product;
		teddies.forEach((teddy) => {
			let teddyBox = document.createElement("div"); // créé la box qui contient chaque teddy
			teddyBox.className = "product__box text-center";
			teddyBox.innerHTML += `
		<a href="teddy.html?id=${teddy._id}">
			<img src="${teddy.imageUrl}" class="teddy__picture" alt="Produit : ${teddy.name}" width="450">
			<span class="product__box__text">
					<span class="product__box__text-name name">${teddy.name}</span>
					<span class="product__box__text-price price">${teddy.price / 100}€</span>
			</span>
		</a>`;
			productBox.appendChild(teddyBox);
		});
	});

/*
Améliorations / Improvement
FR : implémenter la possibilité d'ajouter produit directement dans le panier depuis la homepage
EN : implement the possibility of adding the product directly on cart from the homepage
*/
