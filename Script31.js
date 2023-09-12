document.getElementById("buyButton").addEventListener("click", function () {
    document.getElementById("orderForm").classList.remove("hidden");
});

document.getElementById("order").addEventListener("submit", function (e) {
    e.preventDefault();

    // Перевірка обов'язкових полів
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const novaPoshta = document.getElementById("novaPoshta").value;
    const payment = document.querySelector('input[name="payment"]:checked');
    const quantity = document.getElementById("quantity").value;

    if (!name || !city || !novaPoshta || !payment || !quantity) {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
        return;
    }

    // Відображення інформації про замовлення
    document.getElementById("displayedName").textContent = name;
    document.getElementById("displayedCity").textContent = city;
    document.getElementById("displayedNovaPoshta").textContent = novaPoshta;
    document.getElementById("displayedPayment").textContent = payment.value;
    document.getElementById("displayedQuantity").textContent = quantity;
    document.getElementById("displayedComment").textContent = document.getElementById("comment").value;

    // Показ інформації про замовлення
    document.getElementById("orderForm").classList.add("hidden");
    document.getElementById("orderDetails").classList.remove("hidden");
});
