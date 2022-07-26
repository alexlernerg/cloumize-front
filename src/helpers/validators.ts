export const validators: any = {
  name: (value: string) => {
    let message;

    if (!value) {
      message = 'Name is required';
    } else if (Number(value) <= 0) {
      message = 'Name must be greater than 0';
    }

    return message;
  },
  email: (value: string) => {
    let message;

    if (!value) {
      message = 'Email is required';
    } else if (value && value.length !== 42) {
      message = 'Email length must have 42 characters';
    }

    return message;
  },
  password: (value: string) => {
    let message;

    if (!value) {
      message = 'Password is required';
    } else if (value && value.length !== 42) {
      message = 'Password length must have 42 characters';
    }

    return message;
  },
};
