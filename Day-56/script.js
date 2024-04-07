/**
 * Returns an array of phone numbers in 'xxx xxx xxxx' format
 * @param {string} input - A string of text with phone numbers
 * @returns {Array} An array of phoneNumbers
 */
function matchPhoneNumbers(input) {
	// Define the regular expression pattern for phone numbers
	const phoneNumberPattern = /\d{3} \d{3} \d{4}/g;
  
	// Use the match() method to find all matches in the input string
	return input.match(phoneNumberPattern) || [];
  }
  
  /**
   * Replaces a valid URL with "URL_REPLACED"
   * @param {string} input - A string of text with URLs
   * @returns {string}
   */
  function replaceURLs(input) {
	// Define the regular expression pattern for URLs
	const urlPattern = /https?:\/\/[^\s]+/g;
  
	// Use the replace() method to replace URLs with 'URL_REPLACED'
	return input.replace(urlPattern, 'URL_REPLACED');
  }
  
  /**
   * Returns a count of the number of words available in the given string
   * @param {string} input - A string of text
   * @returns {number}
   */
  function countWords(input) {
	// Use split() method with a regular expression pattern to split the string into words
	const words = input.split(/\s+/);
  
	// Return the total number of words
	return words.length;
  }
  
  /**
   * Returns the original string with a single space between words
   * @param {string} input - A string of text with extra spaces
   * @returns {string} cleaned string without any extra spaces
   */
  function removeExtraSpaces(input) {
	// Use replace() method with a regular expression pattern for extra spaces
	const cleanedString = input.replace(/ +/g, ' ').trim();
  
	// Return the cleaned string
	return cleanedString;
  }
  
  // Sample Test Cases
  console.log(
	matchPhoneNumbers(
	  "My old phone number was 123 456 7890 but now you can reach me at 987 654 3210."
	)
  );
  console.log(
	matchPhoneNumbers("The store number is 555 321 9876, please call us.")
  );
  
  console.log(
	replaceURLs(
	  "Find more info at https://example.com or contact us at http://help.example.com"
	)
  );
  console.log(
	replaceURLs(
	  "The website http://mysite.com has been moved to https://newsite.com"
	)
  );
  
  console.log(countWords("This string has five words."));
  console.log(countWords("Counting words is easy!"));
  
  console.log(removeExtraSpaces("This   string    has   extra spaces."));
  console.log(
	removeExtraSpaces(
	  "     Too many    spaces    at the beginning and end.     "
	)
  );
  