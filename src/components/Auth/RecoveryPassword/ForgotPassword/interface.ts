export interface IUser { email: string; error_email: string | undefined }

export interface IErrors {
  password: {
    lengthMsg: string | undefined,
    uppercaseMsg: string | undefined,
    lowercaseMsg: string | undefined,
  }
}

export interface ITouched {
  [key: string]: boolean | undefined;
};

export interface IForgorPasswordParams {
  user: { email: string; error_email: string | undefined };
  show: boolean;
  isValid: () => boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: ITouched;
  response: string;
}