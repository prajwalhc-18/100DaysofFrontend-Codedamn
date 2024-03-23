const findSubstringIndex = (text, sub) => {
  // Check if either text or sub is empty
  if (text === '' || sub === '') {
      return -1;
  }

  // Use indexOf to find the index of the substring
  return text.indexOf(sub);
};

export default findSubstringIndex;
