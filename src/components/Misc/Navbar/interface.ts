export interface IRoutingParams {
  pathname: string,
  screenWidthMobile: boolean,
  onBoarding: boolean,
  currentUser?: {
    name: string
    email: string
    company_name?: string
    user_name?: string
  }
}