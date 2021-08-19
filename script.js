const characterRange = document.getElementById('characterRange');
const characterNumber = document.getElementById('characterNumber');
const form = document.getElementById('password-generator-form');
const includeUppercaseElement = document.getElementById('capital-letters');
const includeNumbersElement = document.getElementById('numbers');
const includeSpecialCharactersElement = document.getElementById('special-characters');
const passwordDisplay = document.getElementById('password-display');

const upperCaseLetters = arrayFromLowToHigh(65, 90);
const lowerCaseLetters = arrayFromLowToHigh(97, 122);
const numbers = arrayFromLowToHigh(48, 57);
const symbolCharacters = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));


characterNumber.addEventListener('input', SyncCharacterAmount);
characterRange.addEventListener('input', SyncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterNumber.value;
    includeUppercase = includeUppercaseElement.checked;
    includeSpecialCharacters = includeSpecialCharactersElement.checked;
    includeNumbers = includeNumbersElement.checked;
    const password = GeneratePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters);
    passwordDisplay.innerText = password;
});

function GeneratePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters) {
    let charCode = lowerCaseLetters;
    if (includeUppercase === true) {
        charCode = charCode.concat(upperCaseLetters);
    }
    if (includeNumbers === true) {
        charCode = charCode.concat(numbers);
    }
    if (includeSpecialCharacters === true) {
        charCode = charCode.concat(symbolCharacters);
    }
    const generatedPassword = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)];
        generatedPassword.push(String.fromCharCode(characterCode));
    }

    return generatedPassword.join('');

}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function SyncCharacterAmount(e) {
    const value = e.target.value;
    characterRange.value = value;
    characterNumber.value = value;
}

