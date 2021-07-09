
const DEFAULT_CHARACTERS = {
  uppercase: 'ABCDEFJHIJKLMNOPQRSTUVXWYZ',
  lowercase: 'abcdefghijklmnopqrstuvxwyz',
  numbers: '0123456789',
  symbols: '!@#$%&*-:+?()[]{}',
  similar_characters: /[1iILl0oO]/g
};

const NATO = { 'a': 'alfa', 'b': 'bravo', 'c': 'charlie', 'd': 'delta', 'e': 'echo', 'f': 'foxtrot', 'g': 'golf', 'h': 'hotel', 'i': 'india', 'j': 'juliet', 'k': 'kilo', 'l': 'lima', 'm': 'mike', 'n': 'november', 'o': 'oscar', 'p': 'papa', 'q': 'quebec', 'r': 'romeo', 's': 'sierra', 't': 'tango', 'u': 'uniform', 'v': 'victor', 'w': 'whiskey', 'x': 'xray', 'y': 'yankee', 'z': 'zulu' };

export function generatePassword(settings) {
  let characterSet = generateCharacterSet(settings);
  let password = '';

  for (let i = 0; i < settings['password_length'] && characterSet.length > 0; i++) {
    let randomCharacter = characterSet.charAt(Math.floor(Math.random() * characterSet.length));

    if (settings['repeated_characters']) characterSet = characterSet.replace(randomCharacter, '');

    password += randomCharacter;
  }

  if (password === '') password = '😥😥😥';

  return password;
}

export function generatePhoneticPassword(password) {
  let phoneticPassword = '';

  for (const character of password) {
    if (NATO.hasOwnProperty(character))
      phoneticPassword += NATO[character] + ' ';
    else if (NATO.hasOwnProperty(character.toLowerCase()))
      phoneticPassword += NATO[character.toLowerCase()].toUpperCase() + ' ';
    else
      phoneticPassword += character + ' ';
  }

  return phoneticPassword;
}

function generateCharacterSet(settings) {
  let characterSet = '';

  if (settings['uppercase']) characterSet += DEFAULT_CHARACTERS.uppercase;
  if (settings['lowercase']) characterSet += DEFAULT_CHARACTERS.lowercase;
  if (settings['numbers']) characterSet += DEFAULT_CHARACTERS.numbers;
  if (settings['symbols']) characterSet += DEFAULT_CHARACTERS.symbols;

  if (settings['similar_characters']) characterSet = characterSet.replace(DEFAULT_CHARACTERS.similar_characters, '');

  return characterSet;
}