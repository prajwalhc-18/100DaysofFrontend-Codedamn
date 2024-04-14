export const joinElementsWithUnderscore = (array) => {
  // Check if the array is empty
  if (array.length === 0) {
      return '';
  }
  
  // Use the built-in join method to join array elements with underscore
  return array.join('_');
}
