
/*function afficher(id, message) {
    console.log("Message : " + message);
    document.getElementById(id).innerHTML = message;
}

afficher("test", "<p>Hello World</p>");

afficher("test2", "<p>World Hello</p>");

function addition(a, b){
    return a+b;
}

afficher("test3", addition(2,5));*/

// Notion de type

/*var monMessage = "<p>hello</p>";
var monNombre = 17.2;
var maFonction = function(id, message){
    console.log("Message : " + message);
}

maFonction("test4", monMessage);*/
/*var x =17;
var y = 18.2;
var c = "bonjour";
var d = "15.25";

alert(x = parseInt(d));
alert(x + parseFloat(d));
alert(x.toString() + c);

// Notion d'objet
function Voiture(marque, modele) {
    this.marque = marque;
    this.modele = modele;
    this.afficher = function() {
        alert(this.marque + " " + this.modele );
    }
}

var maVoiture = new Voiture("Ford", "Fiesta");

maVoiture.afficher();

console.log(maVoiture.marque);

maVoiture.km = 8000;
maVoiture.rouler = function(distance){
    this["km"] += distance;
}
*/
/*var monTableau = [];
monTableau[0] = "Toto";
monTableau[1] = 17;
monTableau[2] = true;
monTableau[4] = "hello";

console.log(monTableau.length + " éléments : ");

for (var i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

*/
//monTableau[3] == undefined

//syntaxe raccourcie

/*
var monTableau = ["Toto", 17, true, undefined, "hello"];

monTableau.push(38);
monTableau.push({ nom: "alice" });
monTableau.push([1, 2, 3, 4, 5, 6]);
console.log(monTableau);
monTableau.pop();
monTableau.shift() // supprime le 1e élément
monTableau.push([1, 2, 3, 4, 5, 6]);
console.log(monTableau);
console.log(monTableau[6][2]);
//acces au tab de taille 7, et au tab interieur 2
 console.log(monTableau);

 var monTableau2 = ["H", "E", "l", "l", "o"];
 console.log(monTableau2.join("/"));

 var monTableau3 = "Hello";
 console.log(monTableau3.split(""));

 var monTableau4 = "Hello world !";
 console.log(monTableau4.split(" "));

 var monTableau4 = "1+2+3+4";
 console.log(monTableau4.split("+"));

 var monTableau5 = "1+2+3+4";
 

 let nouveauTbleau = monTableau4.split("+");
 let result = 0;
 nouveauTbleau.map(function(a){
     result = result + parseInt(a);
 });
 console.log(result);

 monTableau6 = [1,2,3,4];
 let a = monTableau6.map(function(a){
     return a*a;
 });
console.log(monTableau6);

monTableau7 = [1,2,3,4];
let b = monTableau7.filter(function(b){
    return b%2 == 0;
});
console.log(b);

monTableau8 = [1,2,3,4];
let c = monTableau8.filter(function(c){
    return c%2 != 0;
});
console.log(c);
*/
// 1er méthode : fonction et appel dans html

/*
function doSomething(){
    alert("Vous passer dans l'input");
}

// 2e méthode
var monButton = document.getElementById("monbutton");

// pas de parenthese à la fonction clickme pour qu'il ne s'affiche qu'après le chargement du dom
monButton.addEventListener('click', clickme); 

function clickme(){
    alert("Vous avez cliqué sur le button");
}
*/








