import { Word, PYTHONPROBR } from "@andsfonseca/palavras-pt-br";
Word.library = PYTHONPROBR;

const allWords = Word.getAllWords(6, true, false, false, true);
const possibleKeys = allWords
  .filter((a) => a.length == 6)
  .map((a) => a.toLowerCase());

// console.log(possibleKeys);

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

// console.log(getViginereDecodedItem("x", "r"));
