import fs from "fs";

class Dictionary {
  constructor() {
    try {
      const data = fs.readFileSync("src/assets/br-sem-acentos.txt", "utf8");
      this.words = data.split("\n");
      this.words.pop();
    } catch (e) {
      console.log(e.message);
      this.words = [];
    }
  }

  getWords() {
    return this.words;
  }

  isValid(test) {
    return this.words.includes(test);
  }
}

export default new Dictionary();
