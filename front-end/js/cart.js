"use strict";

let ajoutclasscontainer = document.getElementById("main__container");
ajoutclasscontainer.classList.add("article-aside");

// rajouter un if pour ne rien afficher s'il n'y a aucun article dans le panier et mettre un message "Panier vide"

let panier = document.createElement("article");
panier.className = "cart";
panier.innerHTML += `<div class="cart__price price">Prix</div>`;
createContainer.appendChild(panier);

// let price = Number(teddy.price);
// let quantity = Number(teddy.quantity);
// let total = price * quantity;
// console.log(total);

let panierobjet = JSON.parse(localStorage.getItem("teddy")); // récupération des objets dans le panier
panierobjet.forEach((teddy) => {
	let afficherpanier = document.createElement("div");
	afficherpanier.className = "cart__box";
	afficherpanier.innerHTML += `
        <img src="${teddy.imageUrl}" class="cart__box__teddy-picture" alt="Produit : ${teddy.name}" width="150" />
            <div class="cart__box-text">
                <h3>${teddy.name}</h3>
                <p>En stock</p>
                <div class="cart__box-text-quantity">
                    <p>Quantité : ${teddy.quantity}</p>
                </div>
            </div>
        <div  class="cart__box-price">Prix : ${teddy.price}€</div>`; // remplacer les + et - afin de permettre à l'acheteur d'ajouter des oursons
	panier.appendChild(afficherpanier);
});

let total2panier = document.createElement("div");
total2panier.className = "cart__total";
total2panier.innerHTML += `Sous-total (${panierobjet[0].quantity} oursons) : ${panierobjet[0].price}€`;
// faire une fonction permettant de calculer le total en multipliant pour chaque teddie sa quantité et son prix et en additionnant la somme de tous les résultats !
panier.appendChild(total2panier);

let formulaireutilisateur = document.createElement("aside");
formulaireutilisateur.className = "cart__form";
formulaireutilisateur.innerHTML += `
    <label for="">Nom et Prénom</label>
    <input type="text" placeholder="Doe Jane" />
    <label for="">Adresse</label>
    <input type="text" placeholder="1, rue de la Rue" />
    <label for="">Code postal</label>
    <input type="text" placeholder="11111" />
    <label for="">Ville</label>
    <input type="text" placeholder="Pays" />
    <button>Valider mes coordonnées</button>`;
// quand l'user clique sur le bouton, on enregistre les données de l'utilisateur  dans une variable "user"
createContainer.appendChild(formulaireutilisateur);

let acheterpanier = document.createElement("button"); // bouton qui permet d'acheter et de générer le bon de commande. Redirige sur la page "orders" au clic
// le bouton est en disabled tant que les coordonnées de l'utilisateur ne sont pas complétées
acheterpanier.className = "container";
acheterpanier.innerText = "Acheter les nounours";
main.appendChild(acheterpanier);

let returnIndex = document.createElement("h2");
returnIndex.innerHTML += `<a href="index.html"  class="container"><span class="fas fa-chevron-left"></span> Accueil</a>`;
main.appendChild(returnIndex);
