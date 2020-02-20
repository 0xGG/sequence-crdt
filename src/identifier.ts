export default class Identifier {
  public digit: number;
  public siteID: string;

  constructor(digit: number, siteID: string) {
    this.digit = digit;
    this.siteID = siteID;
  }

  public compareTo(otherID: Identifier) {
    if (this.digit < otherID.digit) {
      return -1;
    } else if (this.digit > otherID.digit) {
      return 1;
    } else {
      return this.siteID.localeCompare(otherID.siteID);
    }
  }
}
