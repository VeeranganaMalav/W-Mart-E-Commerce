let phonesContainer = document.getElementById("phone-container");

let phoneData = [
    {
        id : 1,
        name : "Realme 9i 5G 64 GB, 4 GB RAM, Metallica Gold, Mobile Phone",
        brand : "Realme",
        ram : "4GB",
        price : "15000",
        img : "https://www.reliancedigital.in/medias/Realme-9i-Smart-Phone-493177588-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzEwOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGFhL2g3Yi85OTA5NzI1MTM0ODc4LmpwZ3xkMmY0NmQ2MTA5MGUzNmQxMDY4YWYxZTlhMDc3YTI3NGMwMjNmMWM1NTk0ODU0MmFlZWE0NWY3OTA5Mjk2ZDI1"
    },
    {
        id : 2,
        name : "Samsung Galaxy Z Series Flip3 5G 128 GB, 8 GB RAM, Cream, Mobile Phone",
        brand : "Samsung",
        ram : "8GB",
        price : "29000",
        img : "https://www.reliancedigital.in/medias/Samsung-Galaxy-Z-Flip-3-Smartphone-491997491-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTI0MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2hhMi85NjE3NTAxNTUyNjcwLmpwZ3w5Mjg5ZWQwNWUxNzk1ZDMxMTM5MDM2ZjhkZTg4ZGQ0MDMzNWMwNWUwNzZmYzhiNWI3Nzg4YTI4NzA4MmNjNzAy"
    },
    {
        id : 3,
        name : "Realme 8s 5G 128 GB, 6 GB RAM, Universe Purple, Mobile Phone",
        brand : "Realme",
        ram : "6GB",
        price : "9000",
        img : "https://www.reliancedigital.in/medias/realme-8s-5G-Smartpone-491997629-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDk2Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaGI0L2hiNy85NjMyMTAyNjQ1NzkwLmpwZ3w2ZGZkOTk5MGY3YjFkM2JjN2FjZWNlOTQ1ODQ3NDVmODc2NWI0YzM4OTgyZTBlYmMxZjJlM2I5ZmRjZmU3ZDYw"
    },
    {
        id : 4,
        name : "Samsung S22 5G 256 GB, 8 GB RAM, Green, Mobile Phone",
        brand : "Samsung",
        ram : "8GB",
        price : "24000",
        img : "https://www.reliancedigital.in/medias/Samsung-Galaxy-S22-SmartPhone-492849202-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTg2NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gwZC85Nzc5NDc2NjkzMDIyLmpwZ3xlYjYwMmViMDQxYmM2NTdjMTUyZjVjNDkyMWQ5N2Y2ZmRlYzVkYWUwN2EyMjAwOWViN2NhZmE2YmFlMGJjMTA5"
    },
    {
        id : 5,
        name : "Oppo F21 Pro 5G 128 GB, 8 GB RAM, Cosmic Black, Mobile Phone",
        brand : "Oppo",
        ram : "8GB",
        price : "7000",
        img : "https://www.reliancedigital.in/medias/OPPO-F21-Pro-Smart-Phons-492849911-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NzU3OHxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaGRkLzk4MTM2NjY2OTMxNTAuanBnfDAzNzlhN2ZjYmE1NWM1Mjk5M2YzYmJhMmRjODJiNzYxYWRjMTFhMjEyZWY0MzNiMmNhMGMyZDIwYmI1MmU4YTU"
    },
    {
        id : 6,
        name : "Vivo X80 5G 128 GB, 8 GB RAM, Cosmic Black, Mobile Phone",
        brand : "Vivo",
        ram : "8GB",
        price : "18000",
        img : "https://www.reliancedigital.in/medias/Vivo-X80-Smartphone-492850419-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MjM3NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDc3L2gxOS85ODMyNTg2MDg0MzgyLmpwZ3xjNTdjZjQwNjEwNTg0Yzk2YmMxNjJiNzJkMjRjZmViYTg4ZDAzMTYwMTg0ZjE3N2ZiYjBkNjQ5OGI5MmEwMjcx"
    },
    {
        id : 7,
        name : "OPPO Reno8 Pro 5G 256 GB, 4 GB RAM, Black, Mobile Phone",
        brand : "Vivo",
        ram : "4GB",
        price : "23000",
        img : "https://www.reliancedigital.in/medias/Oppo-CPH2357-Smart-Phones-492850897-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzExMTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2hjMy85ODgyMjAzMDk1MDcwLmpwZ3wyZWUwYmJlZTVlM2Y1ZDNiN2FlODIxNTJmZTFkYjYxMGM5MDgyNjcxNDAxYzMwNWZhYWMyYzI1NDNiNjA1ZGM1"
    },
    {
        id : 8,
        name : "Vivo X80 Pro 5G 256 GB, 6 GB RAM, Cosmic Black, Mobile Phone",
        brand : "Vivo",
        ram : "6GB",
        price : "28000",
        img : "https://www.reliancedigital.in/medias/Vivo-X80-Pro-Smartphones-492850418-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MDUzMjd8aW1hZ2UvanBlZ3xpbWFnZXMvaGEwL2hhYy85ODgyMTc3NTM2MDMwLmpwZ3w2NjVlYjE3Y2M3NmY5MDY1OWJkMTNhYTA3ZTAyNzlmZjdlYjIxOTllMjkxODg5OTIzZWEzZDU1Nzk3MDU4YmVj"
    },
    {
        id : 9,
        name : "Samsung M13 5G 128 GB, 6 GB RAM, Stardust Brown, Mobile Phone",
        brand : "Samsung",
        ram : "6GB",
        price : "8000",
        img : "https://www.reliancedigital.in/medias/Samsung-M13-Mobile-Phone-493178366-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDM4ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2g4Ni85ODk5NjE1MTI1NTM0LmpwZ3w5YjM0NWE4Njc1NTZiZjUzNTBlZGY3NWI0NTI3MTMwODI4YTAyNWFkNDI3NmRmMTNjOWQ4ZjU0ODEzNWIyMmRk"
    },
    {
        id : 10,
        name : "Samsung Galaxy S21 FE 5G 256 GB, 8 GB, Lavender, Mobile Phone",
        brand : "Samsung",
        ram : "8GB",
        price : "25000",
        img : "https://www.reliancedigital.in/medias/Samsung-SM-G990ELVGINU-Smartphone-492575021-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MTIxNTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDg4L2gwOC85ODc5MTgzNzg2MDE0LmpwZ3w5OGEwNTc3N2VhMTM3NmExN2I4ZTZiZWVkYjMwZTlhNzFiODNiYWQwZGU5NzNmOWQ3ZTdhMTMzY2I1MjkxNmY3"
    }
];

displayPhones(phoneData);

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


        phoneImg.src = phone.img;
        phoneName.innerText = phone.name,
        phoneRam.innerText = phone.ram,
        phonePrice.innerText = `₹${phone.price}`

        phoneCard.append(phoneImg, phoneName, phoneRam, phonePrice);
        phonesContainer.append(phoneCard);
    });
}

