function validateEmail(email) {
    // Define minimum and maximum lengths for the email address
    const minLength = 5;
    const maxLength = 50;
  
    // Regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the length is within the specified range
    if (email.length < minLength) {
      return `Email is too short (min ${minLength} characters)`;
    } else if (email.length > maxLength) {
      return `Email is too long (max ${maxLength} characters)`;
    }
  
    // Check if the email matches the regular expression
    if (emailRegex.test(email)) {
      return null; // Return null if the email is valid
    } else {
      return "Invalid email format";
    }
  }

  function validatePassword(password) {
    // Define minimum and maximum lengths for the password
    const minLength = 8;
    const maxLength = 20;
  
    // Regular expression for validating a password
    const passwordRegex = /^(?=.*[!@#$%^&*()-_+=])(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()-_+=]+$/;
  
    // Check if the length is within the specified range
    if (password.length < minLength) {
      return `Password too short (min ${minLength} characters)`;
    } else if (password.length > maxLength) {
      return `Password too long (max ${maxLength} characters)`;
    }
  
    // Check if the password matches the regular expression
    if (passwordRegex.test(password)) {
      return null; // Return null if the password is valid
    } else {
      return "Invalid password. It should contain at least one capital letter and one digit.";
    }
  }
  
  export {validateEmail,validatePassword}