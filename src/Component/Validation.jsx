export const ValidateEmail = new RegExp(
  "[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$"
);

export const ValidateName = new RegExp("[a-zA-Z]$");

export const ValidatePhone = new RegExp("^[0-9]{10}$");

export const ValidateCity = new RegExp(null);
