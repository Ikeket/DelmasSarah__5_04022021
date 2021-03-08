"use strict";

export let createContainer = document.getElementById("main__container");
export const productId = new URLSearchParams(window.location.search).get("id");

// variables liées aux données dont nous aurons besoin dans le localStorage
export const orderData = JSON.parse(localStorage.getItem("orderData"));
export let cart = JSON.parse(localStorage.getItem("cart")) || [];
export let sumBuying = JSON.parse(localStorage.getItem("total"));

// permet d'afficher le nombre de produits contenus dans le panier
// on exporte pas la fonction, car son résultat apparaît sur toutes les pages du site :)
export function teddiesInCart() {
	let sum = 0;
	for (let i = 0; i < cart.length; i++) {
		sum = sum + cart[i].quantity;
	}
	let updateCart = document.querySelector(".cart-number");
	updateCart.textContent = `${sum}`;
	return updateCart;
}
teddiesInCart();

/*******************************************
FR : Gestion des messages d'erreur
EN : Management of error messages
*******************************************/
export const pageNotFound = "Cette page n'existe pas, retournez à l'accueil !";
export const noTeddy =
	"Vous n'avez pas sélectionné d'ourson, retournez à l'accueil pour en choisir un !";
export const invalidForm =
	"Certaines de vos informations semblent incorrectes. Veuillez procéder à la correction des données érronnées.";
export const orderNotExist = "Cette commande n'existe pas !";
export const otherError =
	"Une erreur est survenue, veuillez recharger la page. Si le problème persiste, n'hésitez pas à constacter un administrateur.";

// FR : permet d'avoir un message personnalisé pour l'utilisateur selon le type d'erreur rencontré.
// EN : allows to have a personalized message for the user according to the type of error encountered.
export function messageError(error) {
	let messageError = document.createElement("div");
	messageError.className = "container";
	messageError.innerHTML += `${error}`;
	createContainer.appendChild(messageError);
}
