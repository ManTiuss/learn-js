let products = {
    books: [
        {name: "Гаррі Поттер", description: "Книга про Гаррі Поттера"},
        {name: "Відьмак", description: "Книга про Відьмака"},
        {name: "Гра Престолів", description: "Книга про Гру Престолів"}
    ],
    electronics: [
        {name: "iPhone", description: "Смартфон від Apple"},
        {name: "Samsung Galaxy", description: "Смартфон від Samsung"},
        {name: "Xiaomi Mi", description: "Смартфон від Xiaomi"}
    ],
    clothes: [
        {name: "Футболка", description: "Бавовняна футболка"},
        {name: "Джинси", description: "Джинси з натурального деніму"},
        {name: "Куртка", description: "Зимова куртка з утеплювачем"}
    ]
};

let categories = document.querySelectorAll("#categories li");
for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function() {
        let category = this.getAttribute("data-category");
        showProducts(category);
    });
}

function showProducts(category) {
    let productsList = document.querySelector("#products ul");
    productsList.innerHTML = "";
    for (let i = 0; i < products[category].length; i++) {
        let product = products[category][i];
        let li = document.createElement("li");
        li.textContent = product.name;
        li.addEventListener("click", function() {
            showProductInfo(product);
        });
        productsList.appendChild(li);
    }
}

function showProductInfo(product) {
    let productInfo = document.querySelector("#product-info");
    productInfo.querySelector("h2").textContent = product.name;
    productInfo.querySelector("p").textContent = product.description;
    productInfo.style.display = "block";
}

document.querySelector("#buy-button").addEventListener("click", function() {
    alert("Товар куплений!");
    reset();
});

function reset() {
    document.querySelector("#products ul").innerHTML = "";
    document.querySelector("#product-info").style.display = "none";
}
