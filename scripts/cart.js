let cartContainer = document.getElementById("cart-container");

let cartData = JSON.parse(localStorage.getItem("cart")) || [];



function displayCart(data){
    cartContainer.innerText = "";
    
    if(data === null){
        let emptyImg = document.createElement("img");
        emptyImg.src = "https://www.reliancedigital.in/build/client/images/emptycart.png";
    
        let emptyText = document.createElement("p");
        emptyText.innerText = "Your Shopping Cart is Empty";
    
        cartContainer.append(emptyImg, emptyText);
    }
    else{

        let cartSum = 0;

        data.forEach((product) => {
            cartSum += product.price * product.qty;

            let productContainer = document.createElement("div");

            let productDiv1 = document.createElement("div");
            productDiv1.setAttribute("id", "product-div-1");

            let productImg = document.createElement("img");
            productImg.src = product.img;

            let decrementBtn = document.createElement("button");
            decrementBtn.innerText = "-";

            let productQty = document.createElement("span");
            productQty.innerText = product.qty;

            let incrementBtn = document.createElement("button");
            incrementBtn.innerText = "+";

            productDiv1.append(productImg, decrementBtn, productQty, incrementBtn);

            let productDiv2 = document.createElement("div");
            productDiv2.setAttribute("id", "product-div-2");

            let productName = document.createElement("h4");
            productName.innerText = product.name;

            productDiv2.append(productName);

            let productDiv3 = document.createElement("div");
            productDiv3.setAttribute("id", "product-div-3");

            let productPrice = document.createElement("h3");
            productPrice.innerText = product.price

            productDiv3.append(productPrice);

            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            
            productContainer.append(productDiv1, productDiv2, productDiv3, deleteBtn);
        });


            let cartCheckOut = document.createElement("div");

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
            priceText.innerText = `Price (${product.qty} items)`;

            let priceInfo = document.createElement("p");
            priceInfo.setAttribute("class", "info");
            priceInfo.innerText = `₹ ${cartSum}`;

            priceEl.append(priceText, priceInfo);

            let deliveryEl = document.createElement("div");
            deliveryEl.setAttribute("class", "delivery-el");

            let deliveryText = document.createElement("p");
            deliveryText.setAttribute("class", "sub-text");
            deliveryText.innerText = "Delivery Charges";

            let deliveryInfo = document.createElement("p");
            deliveryInfo.setAttribute("class", "info");
            deliveryInfo.innerText = "FREE";
            deliveryEl.append(deliveryText, deliveryInfo);

            let amountEl = document.createElement("div");
            amountEl.setAttribute("class", "amount-el");

            let amount = document.createElement("h4");
            amount.setAttribute("class", "amount");
            amount.innerText = "AMOUNT PAYABLE";

            let amountInfo = document.createElement("h4");
            amountInfo.setAttribute("class", "info");
            amountInfo.innerText = `₹ ${cartSum}`;
            amountEl.append(amount, amountInfo);

            priceDetailContainer.append(priceDetail, priceEl, deliveryEl, amountEl);
            cartCheckOut.append(checkOutBtn, priceDetailContainer);
    }
}