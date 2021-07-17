export class AuthModel {
  constructor(
    localId: string,
    email: string,
    displayName: string,
    private idToken: string,
    refreshToken: string,
    private expiresIn: string
  ) {}
  get token() {
    return this.idToken;
  }
  get expiary_date() {
    return new Date(this.expiresIn);
  }
  get expiary_mili() {
    return this.expiresIn;
  }
}
