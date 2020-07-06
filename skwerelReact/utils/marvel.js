const axios = require("axios");
const cheerio = require("cheerio");
const { constants } = require("buffer");

const marvelGetTitles = async () => {
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

// const marvelGetDates = (newsArray) => {
//   const marvelNewsData = [];
//   newsArray.forEach((newsfeed) => {
//     axios
//       .get(newsfeed.link)
//       .then((response) => {
//         let $ = cheerio.load(response.data);
//         $("div.article-header__published-date").each((i, el) => {
//           // console.log(el.children[2].data);
//           let date = new Date(el.children[2].data);
//           // gets the difference between date article was written and today's date
//           let dateDiff = (Date.now() - date.getTime()) / (1000 * 3600 * 24);
//           if (dateDiff < 5) {
//             // dateDisplay = true;
//             console.log(newsfeed);
//             marvelNewsData.push(newsfeed);
//           }
//         });
//       })
//       .catch((error) => console.log("Error getting dates from site!"));
//   });
//   console.log(marvelNewsData)
//   return marvelNewsData
// };

// const marvelGetDates = async (newsArray) => {
//   // console.log('I am the link: ', arrayObj)
//   const marvelNewsData = [];
//   newsArray.forEach(async (newsfeed) => {
//     try {
//       let { data } = await axios.get(newsfeed.link);
//       let $ = cheerio.load(data);

//       let dateDisplay = false;
//       // console.log($)
//       $("div.article-header__published-date").each((i, el) => {
//         // console.log(el.children[2].data);
//         let date = new Date(el.children[2].data);
//         // gets the difference between date article was written and today's date
//         let dateDiff = (Date.now() - date.getTime()) / (1000 * 3600 * 24);
//         if (dateDiff < 5) {
//           // dateDisplay = true;
//           // console.log(el.children[2].data);
//           marvelNewsData.push(newsfeed);
//         }
//       });
//       // console.log("NEWSDATA1111: ", marvelNewsData);
//       return marvelNewsData;
//     } catch (error) {
//       throw Error("Error getting dates.");
//     }
//   });
// };

exports.marvel = marvelGetTitles();
// exports.marvelDates = marvelGetDates;
