/* When the page is rendered the counter should have the default value of 0

Clicking on the increment Button once should set the counter value to 3

Clicking on the increment Button twice should set the counter value to 6
*/ 

import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={() => {
						setNumber((prevNumber) => prevNumber + 1);
						setNumber((prevNumber) => prevNumber + 1);
						setNumber((prevNumber) => prevNumber + 1);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
