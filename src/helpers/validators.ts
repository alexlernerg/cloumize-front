const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function checkUppercase(str: any) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toUpperCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}

const lowercase = /G[a-z].*/;
// const uppercase = /^[A-Z]*$/;

export const validators: any = {
  name: (value: string): any => {
    let message;

    if (!value) {
      message = 'Name is required';
    } else if (value && value.length < 5) {
      message = 'Fullname length must have minimum 5 characters';
    }

    return message;
  },
  email: (value: string) => {
    let message;

    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Error email format';
    }

    return message;
  },
  password: (value: string) => {
    let message = '';

    if (!value) {
      message = '8 characteres long';
    } else if (value && value.length < 8) {
      message = '8 characteres long';
    } else if (value && value.length > 8) {
      message = '';
    }
    // console.log("Password", value)
    return message;
  },
  passwordUppercase: (value: string) => {
    let message = '';

    if (!value) {
      message = 'Uppercase letter';
    } else if (value && !checkUppercase(value)) {
      message = 'Uppercase letter';
    } else if (value && checkUppercase(value)) {
      message = '';
    }
    console.log('Uppercase', value);
    return message;
  },
  passwordLowercase: (value: string) => {
    let message = '';

    if (!value) {
      message = 'Lower case letter';
    } else if (value && !lowercase.test(value)) {
      message = 'Lower case letter';
    } else if (value && lowercase.test(value)) {
      message = '';
    }
    // console.log("Lowercase", value)
    // console.log("LowercaseMSG", message)
    return message;
  },
};
