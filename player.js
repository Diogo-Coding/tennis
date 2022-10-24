class Player {
  name;

  #sex = 'female';

  birthday;

  age;

  constructor(name, sex, birthday, age) {
    this.name = name;
    if (sex === 'male' || sex === 'female') {
      this.#sex = sex;
    }

    if ((birthday !== null && birthday !== undefined) || Number.isNaN(birthday)) {
      const [d, m, y] = birthday.split('/');
      this.birthday = new Date(y, m, d);
    }

    this.age = age;
    this.category = '';

    if (this.age < 12) {
      this.category = 'Benjamin';
    } else if (this.age >= 12 && this.age < 16) {
      this.category = 'Cadet';
    } else if (this.age >= 16 && this.age < 20) {
      this.category = 'Junior';
    } else {
      this.category = 'Senior';
    }
  }

  get sex() {
    return this.#sex;
  }

  get Age() {
    return this.age;
  }

  // eslint-disable-next-line grouped-accessor-pairs, class-methods-use-this, no-empty-function
  set sex(sex) {
  }
}
module.exports = Player;
