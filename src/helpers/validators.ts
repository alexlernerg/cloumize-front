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

function checkLowercase(str: any) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toLowerCase() &&
      str.charAt(i).match(/[A-Z]/i)
    ) {
      return true;
    }
  }
  return false;
}

// Regex broken down into parts
const parts = [
  'arn:aws:iam::',
  '(?<region_name>[^:]+?)',         // group 1
  ':'
  // '(?<account_id>\\d{12})',         // group 2
  // ':instance\\/',
  // '(?<instance_id>[A-z0-9\\-]+?)',  // group 3
  // '$'
];

// Joined parts into regex expression
const regexARN = new RegExp(parts.join(''));

export const validators: any = {
  ARN: (value: string): any => {
    let message;

    if (!value) {
      message = 'ARN is required';
    } 
    if (value && !regexARN.test(value)) {
      message = 'ARN must have a correct format';
    }
    console.log("regex", regexARN.test(value))

    return message;
  },
  aws: (value: string): any => {
    let message;

    if (!value) {
      message = 'AWS account name is required';
    }

    return message;
  },
  company: (value: string): any => {
    let message;

    if (!value) {
      message = 'Company Name is required';
    }

    return message;
  },
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
    return message;
  },
  passwordUppercase: (value: string) => {
    let message = '';

    if (!value) {
      message = 'Uppercase letter';
    } 
    if (value && !checkUppercase(value)) {
      message = 'Uppercase letter';
    } 
    if (value && checkUppercase(value)) {
      message = '';
    }
    console.log('message', message);
    return message;
  },
  passwordLowercase: (value: string) => {
    let message = '';

    if (!value) {
      message = 'Lower case letter';
    }
    if (value && !checkLowercase(value)) {
      message = 'Lower case letter';
    } 
    if (value && checkLowercase(value)) {
      message = '';
    }
    // console.log("Lowercase", value)
    // console.log("LowercaseMSG", message)
    return message;
  },
};
