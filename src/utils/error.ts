import { CredentialsSignin } from "next-auth"

export class CustomCredentialsSignin<T> extends CredentialsSignin {
  data: T;
  statusCode: number;
  message: string;

  constructor(data: T, message: string, statusCode: number) {
    super()
    this.data = data
    this.message = message
    this.statusCode = statusCode
  }
}