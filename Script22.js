class Hamburger {
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_LARGE = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SAUCE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        for (let topping of this.toppings) {
            calories += topping.calories;
        }
        return calories;
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        for (let topping of this.toppings) {
            price += topping.price;
        }
        return price;
    }
}

// small hamburger with cheese stuffing
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// add mayo topping
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// ask how many calories there are
console.log("Calories: " + hamburger.calculateCalories());

// how much does it cost
console.log("Price: " + hamburger.calculatePrice());

// I changed my mind and decided to add more sauce
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// How much does it cost now?
console.log("Price with sauce: " + hamburger.calculatePrice());
