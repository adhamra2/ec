const button = document.getElementById("colors-black");
const image = document.getElementById("img");
const button2 = document.getElementById("colors-white")

function test () {
    image.src = "products/product5-b.jpeg"
}

button.addEventListener("click", test) ;

function test2 () {
    image.src = "products/product5.jpeg"
}

button2.addEventListener("click", test2) ;