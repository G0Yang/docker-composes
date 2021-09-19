const express = require("express");
const router = express.Router();

const mnemonic = require("../src/mnemonic/mnemonic");
const seed = require("../src/seed/seed");
const derivation = require("../src/derivation/derivation");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/generateMnemonic", mnemonic.getGenerateMnemonic);
router.post("/validMnemonic", mnemonic.postValidMnemonic);
router.post("/entropyToMnemonic", mnemonic.postEntropyToMnemonic);

router.post("/mnemonicToSeed", seed.postMnemonicToSeed);
router.post("/convertBip32", derivation.postConvertBip32);

module.exports = router;
