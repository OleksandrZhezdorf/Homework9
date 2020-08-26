const grades = {
  Junior: 'junior',
  Middle: 'middle',
  Senior: 'senior',
};

const fines = {
  absenteeism: 100,
  beingLate: 75,
  default: 0,
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

function User(name, language, grade = grades.Junior, fine = fines.default, fine2 = fines.default) {
  this.name = name;
  this.grade = grade;
  this.salary = 1000;
  this.language = language;
  this.tasks = 0;
  this.complited = 0;
  this.finesbad = 0;
  this.fineslate = 0;
  this.fine = fine;
  this.fine2 = fine2;

  this.addTask = () => {
    this.tasks++;
  };


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
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('You need more complited tasks to be Middle, ', this.name);
    }
    else if (3 < this.complited && this.complited <= 5) {
      this.grade = [grades.Middle];
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('You need more complited tasks to be Senior, ', this.name)
    }
    else if (5 < this.complited && this.complited < 10) {
      this.grade = [grades.Senior];
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      console.log('Congratulations. You are Senior, ', this.name)
    }
    else {
      this.complited = 10;
    }
  };
  this.fineabs = () => {
    if (this.fine > 0) {
      this.finesbad += this.fine;
      this.salary -= this.fine || fines.default;
    }
  };
  this.finelate = () => {
    if (this.fine2 > 0) {
      this.fineslate += this.fine2;
      this.salary -= this.fine2 || fines.default;
    }
  };

}

const user = new User('John', 'C++', grades.Junior, fines.absenteeism, fines.beingLate);
const user1 = new User('Bob', 'Rust', grades.Senior, fines.absenteeism, fines.beingLate);
const user2 = new User('Bill', 'Bu', grades.Middle, fines.absenteeism, fines.beingLate);

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user2.addTask();


user.finishTask();
user.finishTask();
user.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user2.finishTask();

user.upgrade();
user1.upgrade();
user2.upgrade();

user.fineabs();
user.fineabs();
user.fineabs();
user.finelate();
user.finelate();
user1.fineabs();
user1.fineabs();
user1.finelate();
user1.finelate();
user2.fineabs();



console.log(user.name, ' :Зарплата ' + user.salary, 'Количество текущих заданий ' + user.tasks, 'Количество выполненных заданий ' + user.complited, 'Штраф за невыход на работу ' + user.finesbad + ' Штраф за опоздание ' + user.fineslate);
console.log(user1.name, ' :Зарплата ' + user1.salary, 'Количество текущих заданий ' + user1.tasks, 'Количество выполненных заданий ' + user1.complited, 'Штраф за невыход на работу ' + user1.finesbad + ' Штраф за опоздание ' + user1.fineslate);
console.log(user2.name, ' :Зарплата ' + user2.salary, 'Количество текущих заданий ' + user2.tasks, 'Количество выполненных заданий ' + user2.complited, 'Штраф за невыход на работу ' + user2.finesbad + ' Штраф за опоздание ' + user2.fineslate);


