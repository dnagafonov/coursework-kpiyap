import { checkPasswordValid } from "./check-password-valid";

export const checkPasswordsValidation = (pas1, pas2) => pas1 === pas2 && checkPasswordValid(pas1);