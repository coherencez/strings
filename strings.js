var userInput = document.getElementById('textInput'),
		submitButton = document.getElementById('submitButton'),
		outputDiv = document.getElementById('outputDiv');

var testString = '';


function reversal(userString) {
	var newString = '';

  for (var i = userString.length - 1; i >= 0; i--) {
    newString += userString[i];
  }

	outputDiv.innerHTML += 
	`<p>Your text reversed is <strong>${newString}</strong></p>`;
}

function alphabits(userString) {
	var newStr = userString.split('').sort().join('');

	outputDiv.innerHTML += 
	`<p>Your text sorted alaphabetically is <strong>${newStr}</strong></p>`;		
}

function palindrome(userString) {
	var reversedString = userString.split('').reverse().join('');

	if (userString == reversedString) {
		outputDiv.innerHTML += 
		`<p><strong>Your string is a Palindrome!</srtong></p>`;
	} else {
		outputDiv.innerHTML += 
		`<p>Sorry that is not a palindrome :(</p>`;
	}
}



function enterListener (e)  {
	if (e.keyCode === 13) {
		console.log("hello");
		validateFields();
	}
}

function validateFields () {
	outputDiv.innerHTML = '';

	if ( isNaN(userInput.value) ) {
		testString = userInput.value;
		userInput.value = '';
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
  } else {
  	userInput.value = '';
  	alert('please enter letters only into the input box');
  }
	
}

	
userInput.addEventListener('keydown', enterListener);
submitButton.addEventListener('click', validateFields)