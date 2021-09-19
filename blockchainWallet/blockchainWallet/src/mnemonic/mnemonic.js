const bip39 = require("bip39");

const setMnemonicLanguage = (language) => {
  const currentLanguage = bip39.getDefaultWordlist();
  return currentLanguage === language
    ? bip39.setDefaultWordlist(currentLanguage)
    : bip39.setDefaultWordlist(language);
};

const getGenerateMnemonic = async (req, res) => {
  try {
    const { strength, language } = req.query;
    setMnemonicLanguage(language);
    const mnemonic = bip39.generateMnemonic(strength);
    const currentLanguage = bip39.getDefaultWordlist();
    console.log(mnemonic);
    res
      .status(200)
      .send({
        mnemonic,
        language: currentLanguage,
        length: mnemonic.match(/ /g).length + 1,
      });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const postValidMnemonic = async (req, res) => {
  try {
    const { mnemonic, wordlist } = req.body;
    const isValid = bip39.validateMnemonic(mnemonic, wordlist);
    console.log(isValid);
    res.status(200).send({ isValid });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const postEntropyToMnemonic = async (req, res) => {
  try {
    const { entropy } = req.body;
    const mnemonic = bip39.entropyToMnemonic(entropy);
    console.log(mnemonic);
    res.status(200).send({ mnemonic });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  getGenerateMnemonic,
  postValidMnemonic,
  postEntropyToMnemonic,
};
