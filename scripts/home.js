// let imagesData = JSON.parse(localStorage.getItem("image-loop")) || [];

function imageSlideShow1(imgData){
    let imgEl = document.createElement("img");
    imgEl.setAttribute("className", "scroll-img");

    let imageLoopContainer = document.getElementById("image-loop-container");
    let i=0;

    let interval = setInterval(() => {
                        if(i == imgData.length){
                            i = 0;
                        }

                        imgEl.src = imgData[i];
                        i++;
                        imageLoopContainer.append(imgEl);
                    }, 2000);
    
}

function imageSlideShow2(imgData){
    let imgEl = document.createElement("img");
    imgEl.setAttribute("className", "scroll-img");

    let imageLoopContainer = document.getElementById("image-loop-container");
    let i=imgData.length-1;

    let interval = setInterval(() => {
                        if(i == 0){
                            i = imgData.length-1;
                        }

                        imgEl.src = imgData[i];
                        i--;
                        imageLoopContainer.append(imgEl);
                    }, 2000);
    
}

let imagesData1 = [
    "https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU",
    "https://www.reliancedigital.in/medias/Clearance-Sale-on-Everyday-Appliances-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MjQ3MHxpbWFnZS9qcGVnfGltYWdlcy9oMDkvaDljLzk5NjQzMzk4ODgxNTguanBnfDNjODg3NzQ1NjYyYjk5ZWQyNWI4Mjk5YWI5YzMxMWI3ZWEzOGUwMTZhZThjY2YzODRmOGJkODgzOTUxNjc0Mzc",
    "https://www.reliancedigital.in/medias/PS5-Combo-Offer-Reliance-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMzg4NDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDg5L2hmNS85OTYyODAzMDY4OTU4LmpwZ3w2NTFhMDczMTg2ZjhjYzIxNmQzNWM5ZDM2MGU2MTQ2N2Y2N2ZiMTM1OTQ0YjRkNjY1N2VmM2M1ZTY1MGY5ODQ2",
    "https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTM2MHxpbWFnZS9qcGVnfGltYWdlcy9oMGIvaDliLzk5NjQzMzg4MDY4MTQuanBnfDg0ZjYxZjIwZTU1MWY1OTI5YTQ1MTk5NTYwYjE0ZmIwODMxYmQxNDVkMjdiYjZhYWVjZTdlYzQ3NzlhNjY5MWM",
    "https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU"
]

let imagesData2 = [
    "https://www.reliancedigital.in/medias/Motorola-e13-CLP-Banner-15-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MTQyNXxpbWFnZS9qcGVnfGltYWdlcy9oMGMvaDA2Lzk5NjE4ODU5MjU0MDYuanBnfDEyNWRjNWU0MjVjZTU2YzBiMDk5MWNkNWM4NzE1YjdiN2I0NTE1OWE4NDYyNzQyNDM1N2YxODlhMWI3MTkxMjk",
    "https://www.reliancedigital.in/medias/One-Plus-11-CLP-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w3MDM0OHxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGUwLzk5NjI2MTEzMTA2MjIuanBnfGIxYTZiNzVkMjE4ZmEyY2E1NDQxMWExYWZkNGUzYTQyZDNiZTMxMWI5YmM2NWJmMjhkZWQzNzFhMjQ1ZTk5NzY",
    "https://www.reliancedigital.in/medias/JBL-CLP-Banner-21-02-2023.jpg?context=bWFzdGVyfGltYWdlc3wxNDY4ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gwYS85OTY0MzM5NzU3MDg2LmpwZ3w0ZWQxMjlkMjIxMjEzMGQ1MjMyM2Q2OTY3Mjk4ZTI3MDMwY2Q2Y2Y4M2NiMjQzMzY3YzE4OTQzMGYyMGMyYzc3",
    "https://www.reliancedigital.in/medias/jiobook-Banner-1680x320.jpg?context=bWFzdGVyfGltYWdlc3wxMTYxMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2hhNS85OTU2MjE0OTMxNDg2LmpwZ3wyOGE5ODcwYTUwYmI4ZjllZDc3NjQ4NzQyNGM5MTM0ZmViMjk1ZDVmYmE5Nzk5OTA5NzA4MzNiYzcyMmRjYzIw"
]


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")

prevButton.addEventListener("click", function(){
    plusSlides(-1);
})
nextButton.addEventListener("click", function(){
    plusSlides(1);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("exp_product_card");
  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.addEventListener("load", function(){
    imageSlideShow1(imagesData1);
    imageSlideShow2(imagesData2);
})