/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Disclaimer: this is literally the first time I'm doing any serious coding with classes, so expect lots of errors
export default class Ship {
  public firstName: string;

  public secondName: string;

  public shipnames: string[];

  public constructor(arr: string[]) {
    [this.firstName, this.secondName] = arr;
    this.shipnames = [];
  }
}
