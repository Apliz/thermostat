class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
    this.max = 25;
    this.min = 10;
  }

  powerSaveOff() {
    this.powerSave = false;
  }

  powerSaveOn() {
    this.powerSave = true;
  }

  state() {
    if (this.powerSave == false) {
      this.max = 32;
    } else {
      this.max = 25;
    }
  }

  up(change) {
    this.state();
    this.temperature += change;
    if (this.temperature > this.max) {
      this.temperature = this.max;
    }
    console.log(`The temperature was changed by ${change} degrees.`);
  }

  down(change) {
    this.temperature -= change;
    if (this.temperature < this.min) {
      this.temperature = this.min;
    }
    console.log(`The temperature was changed by ${change} degrees.`);
  }
}