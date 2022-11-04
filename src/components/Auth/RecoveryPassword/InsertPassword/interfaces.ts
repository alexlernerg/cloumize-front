export interface IUser {
  password: string;
  confirmPassword: string;
  tokenUser: string | undefined;
}

export interface IErrors {
  password: {
    lengthMsg: string | undefined,
    uppercaseMsg: string | undefined,
    lowercaseMsg: string | undefined,
  }
}

export interface ITouched {
  [key: string] : boolean | undefined;
};

export interface IInsertPassParams {
  user: {
    password: string;
    confirmPassword: string;
    tokenUser: string | undefined;
  };
  errors: IErrors;
  touched: ITouched;
  show: boolean;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  isValid: () => boolean;
  response: string;
}