function Student(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = +yearOfBirth;

    this.score = Array(10).fill(undefined);;
    this.attendance = Array(10).fill(undefined);;
    this.ageStudent =
        function () {
            let currentYear = new Date().getFullYear();
            return currentYear - +this.yearOfBirth;
        };
    this.mediumScore = function() {
        return (
            this.score.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
            this.score.length
        );
    };

    this.present = function() {
        const emptyIndex = this.attendance.findIndex(value => value === undefined);
        if (emptyIndex === -1) {
            console.log("Нет свободного места для записи.");
        } else {
            console.log("Запись успешно добавлена.");
            this.attendance[emptyIndex] = true;
        }
    };

    this.absent = function() {
        const emptyIndex = this.attendance.findIndex(value => value === undefined);
        if (emptyIndex === -1) {
            console.log("Нет свободного места для записи.");
        } else {
            console.log("Запись успешно добавлена.");
            this.attendance[emptyIndex] = false;
        }
    };

    this.mark = function(number) {
        if (number >= 0 && number <= 10) {
            const emptyIndex = this.score.findIndex(value => value === undefined);
            if (emptyIndex === -1) {
                console.log("Нет свободного места для записи.");
            } else {
                console.log("Запись успешно добавлена.");
                this.score[emptyIndex] = number;
            }
    }
    };

    this.summary =
        function () {
            let score =  this.mediumScore();
            let numberPresent =
                (this.attendance.filter(value => value === true).length*10) / this.attendance.length;
            switch (true) {
                case (score > 9 && numberPresent > 9):
                    return "Ути какой молодчинка!";
                case (score <= 9 && numberPresent > 9||score > 9 && numberPresent <= 9):
                    return "Норм, но можно лучше";
                default:
                    return "Редиска!"
            }
        }
}
let student1 = new Student("Fedor", "Sherbanyuk", "1988");
let student2 = new Student("Jimmy", "Jimmy", "1986");
let student3 = new Student("Eric ", "Cartman", "2000");

console.log(student1.ageStudent())
console.log(student2.ageStudent())
console.log(student3.ageStudent())
for (let i = 0; i < 10; i++) {
    student1.mark(i)
    student1.present();
}
let i=0;
while (i<10){
    student2.mark(10)
    student2.present();
i++;
}
let j=0;
while (j < 10) {
    student3.mark(8);
    student3.absent();
    j++;
}
console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());




