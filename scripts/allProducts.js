let productsContainer = document.getElementById("product-container");
let productsArray = JSON.parse(localStorage.getItem("products-storage")) || [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];


displayProducts(productsArray);
function displayProducts(data){
    productsContainer.innerHTML = "";

    data.forEach((product) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");

        let productName = document.createElement("h4");
        productName.setAttribute("class", "product-name");

        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product-price");

        let addToCartBtn = document.createElement("button");
        addToCartBtn.innerText = "Add to cart";
        addToCartBtn.setAttribute("class", "add-to-cart-btn");

        addToCartBtn.addEventListener("click", function(){
            if(checkDuplicate(product)){
                alert("Product Already in Cart");
            }
            else{
                cartData.push({...product, quantity : 1});
                localStorage.setItem("cart", JSON.stringify(cartData));
                alert("Product added to cart");
            }
        })

        productImg.src = product.img;
        productName.innerText = product.name;
        productPrice.innerText = `₹${product.price}`;
        
        if(product.ram){
            let productRam = document.createElement("p");
            productRam.setAttribute("class", "product-ram");
            productRam.innerText = product.ram;
            productCard.append(productImg, productName, productRam, productPrice, addToCartBtn);
        }
        else if(product.lens){
            let productLens = document.createElement("p");
            productLens.setAttribute("class", "product-lens");
            productLens.innerText = product.lens;
            productCard.append(productImg, productName, productLens, productPrice, addToCartBtn);
        }

        productsContainer.append(productCard);
    });
}

function checkDuplicate(product){
    for(let i=0; i<cartData.length; i++){
        if(cartData[i].id === product.id){
            return true;
        }
    }
    return false;
}

let filterBrand = document.getElementById("filter-brand");
filterBrand.addEventListener("change", function(){
    if(filterBrand.value === ""){
        displayProducts(productsArray);
    }
    else{
        let filteredBrand = productsArray.filter((element) => {
            return filterBrand.value === element.brand;
        })

        displayProducts(filteredBrand);
    }
})


let filterPrice = document.getElementById("filter-price");
filterPrice.addEventListener("change", function(){
    if(filterPrice.value === ""){
        displayProducts(productsArray);
    }
    else{
        let filteredPrice = productsArray.filter((element) => {
            return element.price < Number(filterPrice.value);
        })

        displayProducts(filteredPrice);
    }
})


let filterRam = document.getElementById("filter-ram");
filterRam.addEventListener("change", function(){
    let phonesArray = [];
    productsArray.forEach((product) => {
        if(product.ram){
            phonesArray.push(product);
        }
    });
    if(filterRam.value === ""){
        displayProducts(phonesArray);
    }
    else{
        let filteredRAM = phonesArray.filter((element) => {
            return filterRam.value === element.ram;
        })

        displayProducts(filteredRAM);
    }
})

let filterLens = document.getElementById("filter-lens");
filterLens.addEventListener("change", function(){
    let camerasArray = [];
    productsArray.forEach((product) => {
        if(product.lens){
            camerasArray.push(product);
        }
    });
    if(filterLens.value === ""){
        displayProducts(camerasArray);
    }
    else{
        let filteredLens = camerasArray.filter((element) => {
            return filterLens.value === element.lens;
        })

        displayProducts(filteredLens);
    }
})