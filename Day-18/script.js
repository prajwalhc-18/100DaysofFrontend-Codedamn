export const removeWhitespaces = (string) => {
  // If the input string is empty, return it as is
  if (string === "") {
      return string;
  }
  
  // Use a regular expression to replace all whitespace characters with an empty string
  return string.replace(/\s+/g, "");
}
