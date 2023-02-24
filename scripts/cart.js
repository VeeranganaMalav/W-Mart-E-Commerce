let cartContainer = document.getElementById("cart-container");

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

displayCart(cartData);

function displayCart(data){
    cartContainer.innerHTML = "";
    
    if(data.length == 0){
        let emptyImg = document.createElement("img");
        emptyImg.src = "https://www.reliancedigital.in/build/client/images/emptycart.png";
        emptyImg.style.width = "30%"
        emptyImg.style.marginLeft = "35%"
    
        let emptyText = document.createElement("p");
        emptyText.innerText = "Your Shopping Cart is Empty";
        emptyText.style.fontSize = "22px"
        emptyText.style.textAlign = "center";
    
        cartContainer.append(emptyImg, emptyText);
        cartContainer.style.display = "flex";
        cartContainer.style.flexDirection = "column";
        cartContainer.style.marginTop = "230px";

    }
    else{
        let cartSum = 0;
        let productCount = data.length;

        let products = document.createElement("div");
        products.setAttribute("id", "products");

        data.forEach((product, index) => {
            cartSum += product.price * product.quantity;

            let productContainer = document.createElement("div");
            productContainer.setAttribute("class", "product-container");


            let productDiv1 = document.createElement("div");
            productDiv1.setAttribute("id", "product-div-1");

            let productImg = document.createElement("img");
            productImg.src = product.img;


            let decrementBtn = document.createElement("button");
            decrementBtn.innerText = "-";

            let productQty = document.createElement("span");
            productQty.innerText = product.quantity;
            
            let incrementBtn = document.createElement("button");
            incrementBtn.innerText = "+";

            let qtyDiv = document.createElement("div");
            qtyDiv.setAttribute("class", "qty-div");

            qtyDiv.append(decrementBtn, productQty, incrementBtn);


            productDiv1.append(productImg, qtyDiv);



            let productDiv2 = document.createElement("div");
            productDiv2.setAttribute("id", "product-div-2");

            let productName = document.createElement("h4");
            productName.innerText = product.name;

            productDiv2.append(productName);


            let productDiv3 = document.createElement("div");
            productDiv3.setAttribute("id", "product-div-3");

            let productPrice = document.createElement("h3");
            productPrice.innerText = `₹${product.price}`;

            productDiv3.append(productPrice);


            let productInfoDiv = document.createElement("div");
            productInfoDiv.setAttribute("class", "product-info-div");

            productInfoDiv.append(productDiv1, productDiv2, productDiv3);




            let buttonDiv = document.createElement("div");
            buttonDiv.setAttribute("class", "button-div");

            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "delete-btn");
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", function(){
                data.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(data));
                displayCart(cartData);
            })

            buttonDiv.append(deleteBtn);
            
            productContainer.append(productInfoDiv, buttonDiv);
            products.append(productContainer);
            cartContainer.append(products);
        });


            let cartCheckOut = document.createElement("div");
            cartCheckOut.setAttribute("class", "cart-checkout-container");

            let checkOutBtn = document.createElement("button");
            checkOutBtn.setAttribute("class", "chekout-btn");
            checkOutBtn.innerText = "CHECKOUT";


            let priceDetailContainer = document.createElement("div");
            priceDetailContainer.setAttribute("class", "price-detail-container");

            let priceDetail = document.createElement("h4");
            priceDetail.setAttribute("class", "price-detail-head");
            priceDetail.innerText = "PRICE DETAILS";


            let priceEl = document.createElement("div");
            priceEl.setAttribute("class", "price-el");

            let priceText = document.createElement("p");
            priceText.setAttribute("class", "sub-text");
            priceText.innerText = `Price (${productCount} items)`;

            let priceInfo = document.createElement("p");
            priceInfo.setAttribute("class", "price-info");
            priceInfo.innerText = `₹ ${cartSum}`;

            priceEl.append(priceText, priceInfo);



            let deliveryEl = document.createElement("div");
            deliveryEl.setAttribute("class", "delivery-el");

            let deliveryText = document.createElement("p");
            deliveryText.setAttribute("class", "sub-text");
            deliveryText.innerText = "Delivery Charges";

            let deliveryInfo = document.createElement("p");
            deliveryInfo.setAttribute("class", "delivery-info");
            deliveryInfo.innerText = "FREE";

            deliveryEl.append(deliveryText, deliveryInfo);



            let amountEl = document.createElement("div");
            amountEl.setAttribute("class", "amount-el");

            let amount = document.createElement("h4");
            amount.setAttribute("class", "amount");
            amount.innerText = "AMOUNT PAYABLE";

            let amountInfo = document.createElement("h4");
            amountInfo.setAttribute("class", "amount-info");
            amountInfo.innerText = `₹ ${cartSum}`;

            amountEl.append(amount, amountInfo);



            priceDetailContainer.append(priceDetail, priceEl, deliveryEl, amountEl);
            cartCheckOut.append(checkOutBtn, priceDetailContainer);
            cartContainer.append(cartCheckOut)
    }
}