let myproduct = productList[0].imageUrl;
let newhtml = `<img src="${myproduct}" />`;
let productDiv = document.querySelector('#myproduct');
productDiv.innerHTML = newhtml;
console.log(myproduct);