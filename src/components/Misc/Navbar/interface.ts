export interface IRoutingParams {
  pathname: string,
  screenWidthMobile: boolean,
  OnBoarding: boolean,
  currentUser?: {
    name: string
    email: string
    company_name?: string
    user_name?: string
  }
}