import { CredentialsSignin } from 'next-auth'

export class InvalidLoginError extends CredentialsSignin {
  code = 'Tài khoản hoặc mật khẩu không chính xác '
}
export class InvalidActiveAccountError extends CredentialsSignin {
  code = 'Tài khoản của bạn chưa được kích hoạt'
}
export class InternalError extends CredentialsSignin {
  code = 'Có lỗi ở phía SERVER'
}
// export class AuthErrorCustom extends Error {
//   code: string;

//   constructor(message: string, code: string) {
//     super(message);
//     this.code = code;
//     this.name = "AuthErrorCustom";
//   }
// }