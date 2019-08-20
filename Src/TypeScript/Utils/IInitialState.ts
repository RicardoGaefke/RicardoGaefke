export interface IInitialContext {
  language: string,
  theme: string,
  consentCookie: boolean,
  name?: string,
  email: string,
  isAuthenticated?: boolean,
  KeepConnected?: boolean,
  ready: boolean,
}
