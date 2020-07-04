const axios = require("axios");
const cheerio = require("cheerio");

const getPostTitles = async () => {
  try {
    const { data } = await axios.get("http://www.marvel.com/articles");
    const $ = cheerio.load(data);
    const postTitles = [];

    $("a.card-body__headline").each((_idx, el) => {
      let link =
        el.attribs.href.toLowerCase().charCodeAt(0) === 104 // 'h'
          ? el.attribs.href
          : `http://www.marvel.com${el.attribs.href}`;
      postTitles.push({
        title: $(el).text(),
        link,
      });
    });

    return postTitles;
  } catch (error) {
    throw error;
  }
};

module.exports = getPostTitles();
