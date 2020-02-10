export default class User {
  constructor(
    public name: string,
    public email: string,
    public uuid: string
  ){}

  static fromJson(json: any): User {
    return {
      name: json.displayName,
      email: json.email,
      uuid: json.uid
    }
  }
}
