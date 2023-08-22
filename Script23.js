class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25);
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceCount = this.attendance.filter(a => a !== undefined).length;
        const attendanceRate = attendanceCount === 0 ? 0 : this.attendance.filter(a => a).length / attendanceCount;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade <= 90 || attendanceRate <= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Example usage:
const student1 = new Student("Іван", "Іванов", 2003);
student1.grades.push(95, 85, 90);
student1.present();
student1.present();
student1.absent();
console.log(student1.summary()); // Добре, але можна краще

const student2 = new Student("Петро", "Петров", 2004);
student2.grades.push(95, 95, 95);
for (let i = 0; i < 25; i++) student2.present();
console.log(student2.summary()); // Молодець!
