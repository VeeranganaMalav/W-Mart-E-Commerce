let addPhoneForm = document.getElementById("add-phone-form");
let phonesData = JSON.parse(localStorage.getItem("phones-storage")) || [];
let productsArray = JSON.parse(localStorage.getItem("products-storage")) || [];

addPhoneForm.addEventListener("submit", function(){
    let phoneId = document.getElementById("phone-id").value;
    let phoneName = document.getElementById("phone-name").value;
    let phoneBrand = document.getElementById("phone-brand").value;
    let phoneRAM = document.getElementById("phone-ram").value;
    let phonePrice = document.getElementById("phone-price").value;
    let phoneImg = document.getElementById("phone-img").value;

    let phoneObj = {
        id : phoneId,
        name : phoneName,
        brand : phoneBrand,
        ram : phoneRAM,
        price : phonePrice,
        img : phoneImg
    };
    phonesData.push(phoneObj);
    productsArray.push(phoneObj);

    localStorage.setItem("phones-storage", JSON.stringify(phonesData));
    localStorage.setItem("products-storage", JSON.stringify(productsArray));
});