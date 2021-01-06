class Respond {
  public data: any;
  public statusCode: number;
  public message: string;
  constructor(data: any, statusCode: number, message: string) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
  }
}
export default Respond;
