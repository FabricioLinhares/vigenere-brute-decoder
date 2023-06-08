import dictionary from "./dictionary.js";
import "dotenv/config";

const ENCODED_STRING = process.env.ENCODED_STRING;

const possibleKeys = dictionary.getWords();

const getViginereDecodedItem = (keyChar, letter) => {
  const aCode = "a".charCodeAt();
  const zCode = "z".charCodeAt();

  const letterCode = letter.charCodeAt();
  const keyCode = keyChar.charCodeAt();

  const letterJumper = keyCode - aCode;

  let newCode = letterCode - letterJumper;

  if (newCode < aCode) newCode = zCode - (aCode - newCode - 1);

  return String.fromCharCode(newCode);
};

let validPhrases = 0;
for (let i = 0; i < possibleKeys.length; i++) {
  if (i % (possibleKeys.length / 100).toFixed() == 0)
    console.log(`${i}/${possibleKeys.length}`);

  const k = possibleKeys[i].repeat(
    (ENCODED_STRING.length / possibleKeys[i].length).toFixed() + 1
  );
  let decoded = "";
  let spacers = 0;
  let validPhrase = true;
  for (let j = 0; j < ENCODED_STRING.length; j++) {
    if (ENCODED_STRING[j] == " ") {
      if (!dictionary.isValid(decoded.split(" ").pop())) {
        validPhrase = false;
        break;
      }

      spacers++;
      decoded = decoded.concat(" ");
    } else
      decoded = decoded.concat(
        getViginereDecodedItem(k[j - spacers], ENCODED_STRING[j])
      );
  }

  if (validPhrase && dictionary.isValid(decoded.split(" ").pop()))
    console.log(decoded, "|", possibleKeys[i], validPhrases++);
}

console.log(validPhrases);
