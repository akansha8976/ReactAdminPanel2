export const validateDescription = (trimmedDescription) => {
  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;

  if (!trimmedDescription) {
    return "Empty description is not allowed";
  } else if (trimmedDescription.length < 4) {
    return "At least 4 alphabets required";
  } else if (trimmedDescription.length > 15) {
    return "Not more than 15 alphabets";
  } else if (
    trimmedDescription.match(specialCharacters) ||
    trimmedDescription.match(numbers)
  ) {
    return "Only alphabets are allowed";
  }

  return ""; // Return empty string if no error
};
