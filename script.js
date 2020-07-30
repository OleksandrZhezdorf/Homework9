const grades = {
  Junior: 'junior',
  Middle: 'middle',
  Senior: 'senior',
};

const fines = {
  absenteeism: 100,
  beingLate: 75,
  default: 50,
};

const bonuses = {
  'C++': 100,
  Rust: 150,
  default: 50,
};

const gradeTax = {
  [grades.Junior]: 0.25,
  [grades.Middle]: 0.5,
  [grades.Senior]: 0.75,
};

function User(name, language, grade = grades.Junior, fine) {
  this.name = name;
  this.grade = grade;
  this.salary = 1000;
  this.language = language;
  this.tasks = 0;
  this.complited = 0;
  this.fine = fine;

  this.addTask = () => {
    this.tasks++;
  };

  /**
   * This method...
   */
  this.finishTask = () => {
    if (this.tasks > 0) {
      this.complited++;
      this.tasks--;
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
    }
  };

  this.upgrade = () => {
    if (this.complited <= 3) {
      this.grade = [grades.Junior];
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('You need more complited tasks to be Middle');
    }
    else if (3 < this.complited && this.complited <= 5) {
      this.grade = [grades.Middle];
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('You need more complited tasks to be Senior')
    }
    else if (5 < this.complited && this.complited < 10) {
      this.grade = [grades.Senior];
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('Congratulations. You are Senior')
    }
    else {
      this.complited = 10;
    }
  };
  this.fines = () => {
    if (this.fine > 0) {
      this.salary -= this.fine || fines.default;
    }
  };


}

const user = new User('John', 'C++', grades.Junior, fines.absenteeism);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();


user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();

user.upgrade();

user.fines();
user.fines();


console.log('Зарплата ' + user.salary, 'Количество текущих заданий ' + user.tasks, 'Количество выполненных заданий ' + user.complited, 'Штраф ' + user.fine);
console.log('Зарплата ' + user1.salary, 'Количество текущих заданий ' + user1.tasks, 'Количество выполненных заданий ' + user1.complited, 'Штраф ' + user1.fine);
console.log('Зарплата ' + user2.salary, 'Количество текущих заданий ' + user2.tasks, 'Количество выполненных заданий ' + user2.complited, 'Штраф ' + user2.fine);