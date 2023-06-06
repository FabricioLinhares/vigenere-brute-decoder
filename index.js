import { Word, PYTHONPROBR } from "@andsfonseca/palavras-pt-br";
Word.library = PYTHONPROBR;

const allWords = Word.getAllWords(6, true, false, false, true);
const possibleKeys = allWords
  .filter((a) => a.length == 6)
  .map((a) => a.toLowerCase());

console.log(possibleKeys);
