const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validators: any = {
  name: (value: string) => {
    let message;

    if (!value) {
      message = 'Name is required';
    }

    return message;
  },
  email: (value: string) => {
    let message;

    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Email is invalid';
    }

    return message;
  },
  password: (value: string) => {
    let message;

    if (!value) {
      message = 'Password is required';
    } else if (value && value.length < 8) {
      message = 'Password length must have 8 characters';
    }

    return message;
  },
};
