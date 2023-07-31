let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this; // повертаємо посилання на об'єкт ladder, щоб можна було викликати інші методи по ланцюжку
    },
    down: function () {
        this.step--;
        return this; // повертаємо посилання на об'єкт ladder
    },
    showStep: function () {
        alert(this.step);
        return this; // повертаємо посилання на об'єкт ladder
    }
};

ladder.up().up().down().showStep(); // 1