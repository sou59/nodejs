var readArticleLabel = function(event){
  var label = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
  return label;
};

var readArticlePrice = function(event){
  var price = event.target.parentNode.previousSibling.previousSibling.innerHTML;
  return parseFloat(price);
}

var addArticleRow = function(label,price){
  var basketDom = document.getElementById("basket-content");
  var newArticleDom = document.createElement("tr");
  var newArticleLabelDom = document.createElement("td");
  newArticleLabelDom.innerHTML = label;
  var newArticlePriceDom = document.createElement("td");
  newArticlePriceDom.innerHTML = price;
  var newArticleRemoveDom = document.createElement("td");
  var newArticleRemoveIconDom = document.createElement("i");
  newArticleRemoveIconDom.className = "fa fa-trash";
  newArticleRemoveDom.appendChild(newArticleRemoveIconDom);
  newArticleDom.appendChild(newArticleLabelDom);
  newArticleDom.appendChild(newArticlePriceDom);
  newArticleDom.appendChild(newArticleRemoveDom)
  basketDom.appendChild(newArticleDom);
}

// tableau de panier + 2e tableau Votre panier
var panier = [];

var monPanier = document.getElementById("basket-content");

var tagimg = document.getElementsByTagName("img");
var classadd = document.getElementsByClassName("add"); // on boucle sur toute les classe add

// click sur img avec lka class add, on applique la fonction addToBasquet pour remplir le panier
function bindEvents(){
  for (let i=0; i<classadd.length; i++) { //taille de classadd
    classadd[i].addEventListener("click", addToBasquet); // ne pas oublier [i]
  }
}

// ajouter le remove dans add car sinon la ligne n'existe pas donc il ne peut rien supp
function addToBasquet(event) {
  var label = readArticleLabel(event);
  var price = readArticlePrice(event);
  addArticleRow(label, price);
  test();
}

// à chaque clik sur panier crée dan le tableau vide une ligne avec article, prix et icone poubelle
bindEvents();

// click sur i pour remove au click sur l'image et appliquer la fonctionremoveFromBasket
var classi = document.getElementsByTagName("i");
function test(){
  for (let i=0; i<classi.length; i++) { //taille de classi
    classi[i].addEventListener("click", removeFromBasket); // ne pas oublier [i]
  }
}

//  fonction de l'img->td->tr puis appliquer la fonction remove sur l'élément
function removeFromBasket(event){
  var removex = event.target.parentNode.parentNode;
  return removex.remove();
}








