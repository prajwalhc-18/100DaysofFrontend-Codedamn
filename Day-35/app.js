/**
 * Class representing a trinary number.
 */
export class Trinary {
	/**
	 * Create a number.
	 * @param {string} trinaryNumber
	 */
	constructor(trinaryNumber) {
		// Check if the input is a valid trinary number
		if (!/^[0-2]+$/.test(trinaryNumber)) {
			// If not valid, set to 0
			this.trinaryNumber = "0";
		} else {
			this.trinaryNumber = trinaryNumber;
		}
	}

	/**
	 * Get the decimal equivalent of the trinary number
	 * @return {number} decimalNumber
	 */
	toDecimal() {
		// Convert trinary number to decimal
		let decimalNumber = 0;

		for (let i = this.trinaryNumber.length - 1, power = 0; i >= 0; i--, power++) {
			const digit = parseInt(this.trinaryNumber[i]);
			decimalNumber += digit * Math.pow(3, power);
		}

		return decimalNumber;
	}
}

// Sample Test Cases
const firstNumber = new Trinary("102012");
console.log(firstNumber.toDecimal()); // Output: 302

const secondNumber = new Trinary("1211112");
console.log(secondNumber.toDecimal()); // Output: 104
