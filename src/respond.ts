export default class Respond {
  public data: any;
  public statusCode: number;
  constructor(data: any, statusCode: number) {
    this.data = data;
    this.statusCode = statusCode;
  }
}
