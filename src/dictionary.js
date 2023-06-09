import fs from "fs";
import "dotenv/config";

class Dictionary {
  constructor() {
    try {
      const data = fs.readFileSync(
        process.env.DICTIONARY_FILE_PATH,
        process.env.DICTIONARY_FILE_ENCODING
      );
      this.words = data.split("\n");
      this.words = this.words.filter((a) => a !== "");
      this.words = this.words.map((a) => a.toLowerCase());
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
