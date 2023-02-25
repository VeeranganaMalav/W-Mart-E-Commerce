let productsContainer = document.getElementById("product-container");
let productsArray = JSON.parse(localStorage.getItem("products-storage")) || [];

displayProducts(productsArray);
function displayProducts(data){
    productsContainer.innerHTML = "";

    data.forEach((product, index) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");

        let productName = document.createElement("h4");
        productName.setAttribute("class", "product-name");

        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product-price");

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("class", "remove-btn");

        removeButton.addEventListener("click", function(){
            data.splice(index, i);
            localStorage.setItem("products-storage", JSON.stringify(data));
            displayProducts(productsArray);
        })

        productImg.src = product.img;
        productName.innerText = product.name;
        productPrice.innerText = `₹${product.price}`;
        
        if(product.ram){
            let productRam = document.createElement("p");
            productRam.setAttribute("class", "product-ram");
            productRam.innerText = product.ram;
            productCard.append(productImg, productName, productRam, productPrice, removeButton);
        }
        else if(product.lens){
            let productLens = document.createElement("p");
            productLens.setAttribute("class", "product-lens");
            productLens.innerText = product.lens;
            productCard.append(productImg, productName, productLens, productPrice, removeButton);
        }

        productsContainer.append(productCard);
    });
}