export default class Version {
  public siteID: string;
  public counter: number;
  public exceptions: number[];

  constructor(siteID: string, counter = 0) {
    this.siteID = siteID;
    this.counter = counter;
    this.exceptions = [];
  }

  public update(version: Version) {
    const incomingCounter = version.counter;
    if (incomingCounter <= this.counter) {
      const index = this.exceptions.indexOf(incomingCounter);
      this.exceptions.splice(index, 1);
    } else if (incomingCounter === this.counter + 1) {
      this.counter = this.counter + 1;
    } else {
      for (let i = this.counter + 1; i < incomingCounter; i++) {
        this.exceptions.push(i);
      }
      this.counter = incomingCounter;
    }
  }
}
