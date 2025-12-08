// 1.
// export function validationUsername(username) {
//   // Must be at lest 3 characters
//   return username.length >= 3;
// }

//
// 2.
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@(stud\.noroff\.no|noroff\.no)$/;
  return emailRegex.test(email);
}

//
// 3.
export function validatePassword(password) {
  return password.length >= 8;
}

//
// 4.
export function validateForm(email, password) {
  const errors = {};

  if (!validateEmail(email)) {
    errors.email = "please enter a valid Noroff email address";
  }

  if (!validatePassword(password)) {
    errors.password = "password must be at least 8 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
