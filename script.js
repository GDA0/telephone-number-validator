const formElement = document.querySelector("form");
const userInput = formElement.querySelector("#user-input");
const clearBtn = formElement.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const phoneNumber = userInput.value.trim(); // Trim to remove leading/trailing spaces

	if (phoneNumber === "") {
		displayMessage("Please provide a phone number", false);
	} else {
		validateTelephoneNumber(phoneNumber);
	}
});

clearBtn.addEventListener("click", () => {
	userInput.value = "";
	clearMessage();
});

function validateTelephoneNumber(number) {
	// Regular expression for a valid US phone number
	const phoneRegex =
		/^(1[\s\-]?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

	// Check if the input matches the regex
	if (phoneRegex.test(number)) {
		displayMessage(`Valid US number: ${number}`, true);
	} else {
		displayMessage(`Invalid US number: ${number}`, false);
	}
}

function displayMessage(message, isValid) {
	resultsDiv.textContent = message;
	resultsDiv.style.color = isValid ? "green" : "red";
}

function clearMessage() {
	resultsDiv.textContent = "";
}
