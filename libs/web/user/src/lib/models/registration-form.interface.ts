import { LoginForm } from './login-form.interface';

export interface RegistrationForm extends LoginForm {
  email: string;
}
