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

  newArticleRemoveIconDom.addEventListener('click',removeFromBasket);
}

var addToBasket = function(event){
  var label = readArticleLabel(event);
  var price = readArticlePrice(event);
  addArticleRow(label,price);
  alert("Article ajouté :\n" + label + "\n" + price);
}

var removeFromBasket = function(event){
  event.target.parentNode.parentNode.remove();
};

var bindEvents = function(){
  var images = document.getElementsByTagName("img");
  for(var i=0 ; i<images.length ; i++){
    var image = images[i];
    if(image.classList.contains("add")){
      image.addEventListener("click",addToBasket);
    }
  }
}

bindEvents();
