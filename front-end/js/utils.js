"use strict";

// ************************************************** //
// ********* exported variables & constants ********* //

export const productId = new URLSearchParams(window.location.search).get("id");
// export const urlAPI = `http://localhost:3000/api/teddies`;

export let cart = JSON.parse(localStorage.getItem("teddy")) || [];
// export let clearCart = cart.clear();
export let createContainer = document.getElementById("main__container");

export let sumBuying = JSON.parse(localStorage.getItem("prices"));

let firstName = "Jane";
let lastname = "Doe";
let address = "1 rue de la Rue";
let country = "Licorneland";
let email = "email@email.email";

export const userData = {
	name: `${firstName} ${lastname}`,
	address: `${address}, ${country}`,
	email: email,
};
// ************************************************** //
// *************** exported functions *************** //
