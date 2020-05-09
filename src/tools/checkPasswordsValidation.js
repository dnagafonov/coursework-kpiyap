import { checkPasswordValid } from "./checkPasswordValid";

export const checkPasswordsValidation = (pas1, pas2) => pas1 === pas2 && checkPasswordValid(pas1);