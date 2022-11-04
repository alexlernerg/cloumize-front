export interface IData { awsAccountName: string; companyName: string, userName: string; email: string, password: string; confirmPassword: string }

export interface IErrors {
  awsAccountName: string | undefined,
  companyName: string | undefined,
  userName: string | undefined,
  email: string | undefined,
  password: {
    lengthMsg: string | undefined,
    uppercaseMsg: string | undefined,
    lowercaseMsg: string | undefined,
  },
  aws?: string | undefined,
  company?: string | undefined,
  name?: string | undefined,
  confirmPassword?: string | undefined
}

export interface IAuthParams {
  screenWidthMobile: boolean;
  signinPage: boolean;
  data: IData;
  errors: IErrors;
  touched: {
    [key: string]: boolean | undefined;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorAPI: string;
  show: boolean;
}
