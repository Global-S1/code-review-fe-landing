export interface FormContent {
  firstname: string;
  lastname: string;
  email: string;
  cellphone: string;
  termsConditions: string;
  news: string;
  button: string;
  buttonLoading: string;
  placeholder: string;
  validations: {
    firstname: string;
    lastname: string;
    email: string;
    cellphone: string;
    termsConditions: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

export interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  terms: boolean;
  newsletter: boolean;
}

export interface FormErrors {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  terms: string;
}
