let addCameraForm = document.getElementById("add-camera-form");
let camerasData = JSON.parse(localStorage.getItem("cameras-storage")) || [];
let productsArray = JSON.parse(localStorage.getItem("products-storage")) || [];

addCameraForm.addEventListener("submit", function(){
    let cameraId = document.getElementById("camera-id").value;
    let cameraName = document.getElementById("camera-name").value;
    let cameraBrand = document.getElementById("camera-brand").value;
    let cameraLens = document.getElementById("camera-lens").value;
    let cameraPrice = document.getElementById("camera-price").value;
    let cameraImg = document.getElementById("camera-img").value;

    let cameraObj = {
        id : cameraId,
        name : cameraName,
        brand : cameraBrand,
        lens : cameraLens,
        price : cameraPrice,
        img : cameraImg
    };
    camerasData.push(cameraObj);
    productsArray.push(cameraObj);

    localStorage.setItem("cameras-storage", JSON.stringify(camerasData));
    localStorage.setItem("products-storage", JSON.stringify(productsArray));
});