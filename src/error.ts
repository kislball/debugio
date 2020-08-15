export class DebugIOError implements Error {
  public name: string = "DebugIOError";
  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}