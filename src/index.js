import dictionary from "./dictionary.js";

const CODED_STRING = "veoko rof ktqstqgirfxa tywq";

const possibleKeys = dictionary.getWords().map((a) => a.toLowerCase());

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
    (CODED_STRING.length / possibleKeys[i].length).toFixed() + 1
  );
  let decoded = "";
  let spacers = 0;
  let invalidPhrase = false;

  for (let j = 0; j < CODED_STRING.length; j++) {
    if (CODED_STRING[j] == " ") {
      if (!dictionary.isValid(decoded.split(" ").pop())) {
        invalidPhrase = true;
        break;
      }

      spacers++;
      decoded = decoded.concat(" ");
    } else
      decoded = decoded.concat(
        getViginereDecodedItem(k[j - spacers], CODED_STRING[j])
      );
  }

  if (!invalidPhrase) console.log(decoded, possibleKeys[i], validPhrases++);
}

console.log(validPhrases);
