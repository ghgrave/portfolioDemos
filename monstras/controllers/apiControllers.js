const getRandImage = (req, res) => {
  res.send("Sending a random image");
};

const loadDocs = (req, res) => {
  res.send("Will send documentation here");
};

module.exports = { getRandImage, loadDocs };
