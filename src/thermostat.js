class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
    this.max = 25;
    this.min = 10;
    this.usage = 'medium-usage';
  }


  powerSaveOff() {
    this.powerSave = false;
  }

  powerSaveOn() {
    this.powerSave = true;
    if(this.temperature > this.max){
      this.temperature = this.max;
    }
  }

  state() {
    if (this.powerSave == false) {
      this.max = 32;
    } else {
      this.max = 25;
    }
  }

  usageState(){
    if(this.temperature < 18){
      this.usage = 'low-usage';
    }else if(this.temperature > 24){
      this.usage = 'high-usage';
    }else{
      this.usage = 'medium-usage';
    }
  }

  up(change) {
    this.state();
    this.temperature += change;
    if (this.temperature > this.max) {
      this.temperature = this.max;
    }
    this.usageState();
    console.log(`The temperature was changed by ${change} degrees.`);
  }

  down(change) {
    this.temperature -= change;
    if (this.temperature < this.min) {
      this.temperature = this.min;
    }
    this.usageState();
    console.log(`The temperature was changed by ${change} degrees.`);
  }

  reset(){
    this.temperature = 20;
  }

  
}