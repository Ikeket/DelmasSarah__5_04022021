"use strict";
import {
	noTeddy,
	productId,
	cart,
	createContainer,
	messageError,
	otherError,
	pageNotFound,
	teddiesInCart,
} from "./utils.js";

console.log("productId = [" + productId + "]");
if (productId !== null) {
	fetch(`http://localhost:3000/api/teddies/${productId}`)
		.then((response) => response.json())
		.then((teddy) => {
			if (teddy._id !== undefined) {
				// FR : créé un titre personnalisé en fonction du produit sélectionné
				// EN : created a personalized title based on the selected product
				let dynamicTitle = document.querySelector("title");
				dynamicTitle.textContent = `Orinours, découvrez ${teddy.name}`;

				let teddyProduct = document.createElement("article");
				teddyProduct.className = "teddy";
				teddyProduct.innerHTML += `<img src="${teddy.imageUrl}" class="teddy__picture" alt="Produit : ${teddy.name}" width="900">`;
				let teddyBox = document.createElement("div");
				teddyBox.className = "teddy__box";
				teddyBox.innerHTML += `
				<div class="teddy__box__text">
					<h3 class="teddy__box__text-name">${teddy.name}</h3>
					<p class="teddy__box__text-price">Prix : ${teddy.price / 100}€</p>
					<p class="teddy__box__text-description">${teddy.description}</p>
				</div>
				<div class="teddy__box__input">
					<select name="colors" id="teddy__colors"></select>
					<button class="add-to-cart btn buy-btn text-center" type="button">
						Craquer pour ${teddy.name}
					</button>
				</div>`;
				teddyProduct.append(teddyBox);
				createContainer.append(teddyProduct);

				let teddyColors = document.getElementById("teddy__colors");
				teddy.colors.forEach(function (product_color) {
					teddyColors.innerHTML += `<option value="${product_color}">${product_color}</option>`;
				});

				// FR : création et gestion du localStorage
				// EN : creation and management of localStorage
				let teddyObject = {
					name: teddy.name,
					quantity: 1,
					imageUrl: teddy.imageUrl,
					description: teddy.description,
					price: teddy.price / 100,
					_id: teddy._id,
					color: teddyColors,
				};

				let addToCart = document.querySelector(".add-to-cart");
				addToCart.addEventListener("click", () => {
					location.reload();
					teddiesInCart();

					if (cart.length === 0) {
						cart.push(teddyObject);
						localStorage.setItem("cart", JSON.stringify(cart));
					} else {
						for (let i = 0; i < cart.length; i++) {
							if (teddyObject.name === cart[i].name) {
								cart[i].quantity += 1;
								localStorage.setItem("cart", JSON.stringify(cart));
								return;
							}
						}
						cart.push(teddyObject);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				});
			} else {
				messageError(pageNotFound);
			}
		})
		.catch((error) => {
			messageError(otherError);
			console.error(error);
		});
} else {
	messageError(noTeddy);
}

/*******************************************
FR - Amélioration : ajouter la possibilité de sélectionner la quantité de produits à acheter
FR - Amélioration : récupérer de la valeur sélectionnée dans l'input "colors" + le nombre d'oursons en stock
FR - Amélioration : afficher le nombre d'oursons en stock
EN - Improvement : add the possibility of selecting the quantity of products to buy
EN - Improvement : retrieve of the value selected in the "colors" input + the number of bears in stock
EN - Improvement : display the number of bears in stock
*******************************************/
