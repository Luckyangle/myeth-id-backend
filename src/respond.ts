class Respond {
  public data: any;
  public message: string;
  public code: number;
  constructor(data: any, message: string, code: number) {
    this.data = data;
    this.message = message;
    this.code = code;
  }
}
export default Respond;
