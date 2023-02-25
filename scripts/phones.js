let phonesContainer = document.getElementById("phone-container");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let phonesData = JSON.parse(localStorage.getItem("phones-storage")) || [];

displayPhones(phonesData);
function displayPhones(data){
    phonesContainer.innerHTML = "";

    data.forEach((phone) => {
        let phoneCard = document.createElement("div");
        phoneCard.setAttribute("class", "phone-card");

        let phoneImg = document.createElement("img");
        phoneImg.setAttribute("class", "phone-img");

        let phoneName = document.createElement("h4");
        phoneName.setAttribute("class", "phone-name");

        let phoneRam = document.createElement("p");
        phoneRam.setAttribute("class", "phone-ram");

        let phonePrice = document.createElement("p");
        phonePrice.setAttribute("class", "phone-price");

        let addToCartBtn = document.createElement("button");
        addToCartBtn.innerText = "Add To Cart";
        addToCartBtn.setAttribute("class", "add-cart-btn");


        phoneImg.src = phone.img;
        phoneName.innerText = phone.name;
        phoneRam.innerText = phone.ram;
        phonePrice.innerText = `₹${phone.price}`;

        addToCartBtn.addEventListener("click", function(){
            if(checkDuplicate(phone)){
                alert("Product Already in Cart");
            }
            else{
                cartData.push({...phone, quantity : 1});
                localStorage.setItem("cart", JSON.stringify(cartData));
                alert("Product added to cart");
            }
        })

        phoneCard.append(phoneImg, phoneName, phoneRam, phonePrice, addToCartBtn);
        phonesContainer.append(phoneCard);
    });
}


function checkDuplicate(phone){
    for(let i=0; i<cartData.length; i++){
        if(cartData[i].id === phone.id){
            return true;
        }
    }
    return false;
}

const filterBrand = document.getElementById("filter-brand");
filterBrand.addEventListener("change", function(){
    if(filterBrand.value === ""){
        displayPhones(phonesData);
    }
    else{
        let filteredBrand = phonesData.filter((element) => {
            return filterBrand.value === element.brand;
        })

        displayPhones(filteredBrand);
    }
})


let filterPrice = document.getElementById("filter-price");
filterPrice.addEventListener("change", function(){
    if(filterPrice.value === ""){
        displayPhones(phonesData);
    }
    else{
        let filteredPrice = phonesData.filter((element) => {
            return element.price < Number(filterPrice.value);
        })

        displayPhones(filteredPrice);
    }
})


const filterRam = document.getElementById("filter-ram");
filterRam.addEventListener("change", function(){
    if(filterRam.value === ""){
        displayPhones(phonesData);
    }
    else{
        let filteredRAM = phonesData.filter((element) => {
            return filterRam.value === element.ram;
        })

        displayPhones(filteredRAM);
    }
})