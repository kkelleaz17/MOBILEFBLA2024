// Function to extract the part of the email address before the '@' symbol
export default function EmailWithat(email) {
  // Convert the input email to a string
  var emailString = String(email);
  // Find the position of the last occurrence of '@' in the email
  var lastAtIndex = emailString.indexOf('@');
  // Return the substring of the email from the beginning up to the last '@' character
  return emailString.substring(0, lastAtIndex);
}
