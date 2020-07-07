const axios = require("axios");
const cheerio = require("cheerio");

const getPostTitles = async () => {
  const postTitles = [];
  try {
    const { data } = await axios.get("http://www.marvel.com/articles");
    const $ = cheerio.load(data);

    $("a.card-body__headline").each((_idx, el) => {
      let newsDate = el.next.next.children[1].children[0].data.split(" ");
      if (
        newsDate[1] === "hours" ||
        newsDate[1] === "minutes" ||
        newsDate[1] === "days"
      ) {
        let link =
          el.attribs.href.toLowerCase().charCodeAt(0) === 104 // 'h'
            ? el.attribs.href
            : `http://www.marvel.com${el.attribs.href}`;
        let title = el.children[0].data;
        let description = el.next.children[0].data;
        postTitles.push({
          title,
          link,
          description,
          date: newsDate
        });
      }
    });
    // sorts postTitles by number and then minutes, hours, days
    postTitles.sort((a, b) => (a.date[1] < b.date[1]) ? 1 : (a.date[1] === b.date[1]) ? ((a.date[0] > b.date[0]) ? 1 : -1) : -1 )
    return postTitles;
  } catch (error) {
    throw error;
  }
};

exports.marvel = getPostTitles().then(post => post);
