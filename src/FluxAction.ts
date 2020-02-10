export default class FluxAction {
  constructor(
    public type: string,
    public payload: any,
    public error: any
  ){}

  plane(): any {
    return {
      type: this.type,
      payload: this.payload,
      error: this.error
    }
  }

  static createSuccessAction(type: string, payload: any) {
    return new FluxAction(type, payload, {}).plane
  }

  static reateErrorAction(type: string, error: any) {
    return new FluxAction(type, {}, error).plane
  }
}
