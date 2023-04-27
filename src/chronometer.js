class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    const minutesPassed = this.currentTime / 60;
    return Math.floor(minutesPassed);
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const valueAsString = value.toString();
    if (valueAsString.length === 1) {
      return `${0+valueAsString}`
    }
    else {
      return valueAsString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const splitMinutes = this.getMinutes();
    const splitSeconds = this.getSeconds();
    const splitMinutesString = this.computeTwoDigitNumber(splitMinutes);
    const splitMinutesSeconds = this.computeTwoDigitNumber(splitSeconds);
    const splitString = `${splitMinutesString}:${splitMinutesSeconds}`;
    return splitString;
  }
}
