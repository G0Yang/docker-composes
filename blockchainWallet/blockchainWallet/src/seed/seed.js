const bip39 = require("bip39");
const bip32 = require("bip32");

const postMnemonicToSeed = async (req, res) => {
  try {
    const { mnemonic, password } = req.body;
    const seed = bip39.mnemonicToSeedSync(mnemonic, password);
    const entropy = bip39.mnemonicToEntropy(mnemonic);
    console.log(seed);
    res.status(200).send({ seed: seed.toString("hex"), entropy });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const postConvertBip32 = async (req, res) => {
  try {
    const { seed, base58, publicKey, privateKey, chainCode } = req.body;
    const bip32FromSeed = seed ? bip32.fromSeed(Buffer.from(seed, 'hex')) : undefined;
    const bip32FromBase58 = base58 ? bip32.fromBase58(base58) : undefined;
    const bip32FromPublicKey = publicKey && chainCode
      ? bip32.fromPublicKey(publicKey, chainCode)
      : undefined;
    const bip32FromPrivateKey = privateKey && chainCode
      ? bip32.fromPrivateKey(privateKey, chainCode)
      : undefined;
    res.status(200).send({
        bip32FromSeed,
        base58:bip32FromSeed?bip32FromSeed.toBase58():undefined,
        bip32FromBase58,
        bip32FromPublicKey,
        bip32FromPrivateKey,
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = {
  postMnemonicToSeed,
  postConvertBip32,
};
