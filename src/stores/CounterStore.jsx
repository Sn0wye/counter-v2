import { makeObservable, observable, computed, action } from 'mobx';

class CounterStore {
  counter = 0;
  isEnabled = false;
  inputValue = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      isEnabled: observable,
      inputValue: observable,
      hours: computed,
      minutes: computed,
      seconds: computed,
      setInputValue: action,
      handleInput: action,
      decreaseCounter: action,
      resetCounter: action
    });
  }

  decreaseCounter() {
    this.counter = this.counter - 1;
  }
  get hours() {
    const hours = Math.floor(this.counter / 60 / 60);
    return hours;
  }
  get minutes() {
    const minutes = Math.floor((this.counter / 60 / 60 - this.hours) * 60);
    return minutes;
  }
  get seconds() {
    const seconds = Math.floor(
      ((this.counter / 60 / 60 - this.hours) * 60 - this.minutes) * 60
    );
    return seconds;
  }

  setInputValue(value) {
    this.inputValue = value;
  }
  handleInput({ target }) {
    if (target.value !== '00:00') {
      this.isEnabled = true;
      const timeArray = target.value.split(':');
      const hoursInMiliseconds = timeArray[0] * 60 * 60;
      const minutesInSeconds = timeArray[1] * 60;
      const allSeconds = hoursInMiliseconds + minutesInSeconds;
      this.setInputValue(allSeconds);
      this.counter = allSeconds;
    }
  }

  resetCounter() {
    this.counter = this.inputValue;
    clearInterval(interval);
  }
}

export default new CounterStore();
