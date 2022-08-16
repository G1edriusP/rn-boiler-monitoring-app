import { makeObservable, observable, action, computed } from "mobx";

class BoilerStore {
  temp: number = 0;
  hist = null;
  filteredHist = null;

  constructor() {
    makeObservable(this, {
      temp: observable,
      hist: observable,
      filteredHist: observable,
      setTemp: action,
      setHist: action,
      setFilteredHist: action,
      // getTempChanged: computed,
    });
  }

  setTemp = (value: number) => {
    this.temp = value;
  };

  setHist = (value: any) => {
    this.hist = value;
  };

  setFilteredHist = (value: any) => {
    this.filteredHist = value;
  };

  // get getTempChanged() {
  //   return `New temp value: ${this.temp.tempC}`;
  // }
}

export default new BoilerStore();
