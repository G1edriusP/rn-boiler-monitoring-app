import { makeObservable, observable, action, computed } from "mobx";

class BoilerStore {
  temp: number = 0;
  hist = null;

  constructor() {
    makeObservable(this, {
      temp: observable,
      hist: observable,
      setTemp: action,
      setHist: action,
      // getTempChanged: computed,
    });
  }

  setTemp = (value: number) => {
    this.temp = value;
  };

  setHist = (value: any) => {
    this.hist = value;
  };

  // get getTempChanged() {
  //   return `New temp value: ${this.temp.tempC}`;
  // }
}

export default new BoilerStore();
