const axios = require("axios");
const cheerio = require("cheerio");

const mapping = {
  "sol": "C0006718",// solana
  "dot": "C0006553", // polkadot
  "srm": "C0006646", // serum
  "uni": "C0006630", // uniswap
};

const getAxios = async (req, res, next) => {
  try {
    req.name = req.query.name || req.body.name;
    const url = 'http://40.121.87.61/en/crypto/' + (mapping[req.name] || req.name);
    const response = await axios.get(url);
    const data = response.data;
    req.loadCheerio = cheerio.load(data);
    next();
  } catch (e) {
    res.status(400).send({
      function: "getAxios",
      message: e.message,
      axiosError: {
        status: e.response.status,
        statusText: e.response.statusText,
        //data: e.response.data,
      },
    });
  }
};

const getCryptoGrade = async (req, res) => {
  try {
    const rating = req.loadCheerio("span.r-rating-container").children();
    const grade = rating[0]?.children[0]?.data;
    const span = rating[0]?.children[1]?.children[0]?.data;
    res.status(200).send({
      grade,
      span,
      mapping: mapping[req.name],
      "not supported": (!grade && !span) ? true : undefined,
    });
  } catch (e) {
    res.status(400).send({
      function: "getCryptoGrade",
      message: e.message,
    });
  }
};

module.exports = {
  getAxios,
  getCryptoGrade,
};
