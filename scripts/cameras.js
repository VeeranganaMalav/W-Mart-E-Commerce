let camerasContainer = document.getElementById("camera-container");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let camerasData = JSON.parse(localStorage.getItem("cameras-storage")) || [];

displayCameras(camerasData);
function displayCameras(data){
    camerasContainer.innerHTML = "";

    data.forEach((camera) => {
        let cameraCard = document.createElement("div");
        cameraCard.setAttribute("class", "camera-card");

        let cameraImg = document.createElement("img");
        cameraImg.setAttribute("class", "camera-img");

        let cameraName = document.createElement("h4");
        cameraName.setAttribute("class", "camera-name");

        let cameraLens = document.createElement("p");
        cameraLens.setAttribute("class", "camera-lens");

        let cameraPrice = document.createElement("p");
        cameraPrice.setAttribute("class", "camera-price");

        let addToCartBtn = document.createElement("button");
        addToCartBtn.innerText = "Add To Cart";
        addToCartBtn.setAttribute("class", "add-cart-btn");


        cameraImg.src = camera.img;
        cameraName.innerText = camera.name;
        cameraLens.innerText = camera.lens;
        cameraPrice.innerText = `₹${camera.price}`;

        addToCartBtn.addEventListener("click", function(){
            if(checkDuplicate(camera)){
                alert("Product Already in Cart");
            }
            else{
                cartData.push({...camera, quantity : 1});
                localStorage.setItem("cart", JSON.stringify(cartData));
                alert("Product added to cart");
            }
        })

        cameraCard.append(cameraImg, cameraName, cameraLens, cameraPrice, addToCartBtn);
        camerasContainer.append(cameraCard);
    });
}


function checkDuplicate(camera){
    for(let i=0; i<cartData.length; i++){
        if(cartData[i].id === camera.id){
            return true;
        }
    }
    return false;
}

const filterBrand = document.getElementById("filter-brand");
filterBrand.addEventListener("change", function(){
    if(filterBrand.value === ""){
        displayCameras(camerasData);
    }
    else{
        let filteredBrand = camerasData.filter((element) => {
            return filterBrand.value === element.brand;
        })

        displayCameras(filteredBrand);
    }
})


let filterPrice = document.getElementById("filter-price");
filterPrice.addEventListener("change", function(){
    if(filterPrice.value === ""){
        displayCameras(camerasData);
    }
    else{
        let filteredPrice = camerasData.filter((element) => {
            return element.price < Number(filterPrice.value);
        })

        displayCameras(filteredPrice);
    }
})


const filterLens = document.getElementById("filter-lens");
filterLens.addEventListener("change", function(){
    if(filterLens.value === ""){
        displayCameras(camerasData);
    }
    else{
        let filteredLens = camerasData.filter((element) => {
            return filterLens.value === element.lens;
        })

        displayCameras(filteredLens);
    }
})