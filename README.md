# vigenere-brute-decoder

An vigenere brute force decoder. Its uses an word language list to identify the key from an vigenere encoded string.

## Usage

- You have to rename the `.env.example` file to `.env`.
- Config the env file whenever you want.
  - You can generate an vigenere encoded string [manually](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) or with [an encoder](https://www.cs.du.edu/~snarayan/crypt/vigenere.html).
- Run `npm start`

## Dictionary

The default word list file is an `pt-br` dictionary by [IME - USP](https://www.ime.usp.br/~pf/dicios/br-sem-acentos.txt), this can be adding a new dictionary file in `src/assets` directory and changing the configs on `.env` file.
