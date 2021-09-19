const bip32 = require("bip32");

const postConvertBip32 = async (req, res) => {
    try {
        const { seed, base58, publicKey, privateKey, chainCode } = req.body;
        const network = {
            wif: 128,
            bip32: {
                public: 76067358,
                private: 76066276,
            }
        };
        const bip32FromSeed = seed ? bip32.fromSeed(Buffer.from(seed, 'hex'), network) : undefined;
        const bip32FromBase58 = base58 ? bip32.fromBase58(base58, network) : undefined;
        const bip32FromPublicKey = publicKey && chainCode
            ? bip32.fromPublicKey(Buffer.from(publicKey, 'hex'), Buffer.from(chainCode, 'hex'), network)
            : undefined;
        const bip32FromPrivateKey = privateKey && chainCode
            ? bip32.fromPrivateKey(Buffer.from(privateKey, 'hex'), Buffer.from(chainCode, 'hex'), network)
            : undefined;
        res.status(200).send({
            bip32FromSeed,
            base58:bip32FromSeed?bip32FromSeed.toBase58():undefined,
            wifFromSeed:bip32FromSeed?bip32FromSeed.toWIF():undefined,
            chaincodeFromSeed:bip32FromSeed?bip32FromSeed.chainCode.toString('hex'):undefined,
            bip32FromBase58,
            wifFromBase58:bip32FromBase58?bip32FromBase58.toWIF():undefined,
            chaincodeFromBase58:bip32FromBase58?bip32FromBase58.chainCode.toString('hex'):undefined,
            bip32FromPublicKey,
            bip32FromPrivateKey,
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
};

module.exports = {
    postConvertBip32,
};
