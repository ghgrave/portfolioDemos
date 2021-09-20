const express = require("express");
const app = express();

app.use(express.static("public"));

const monsterRoutes = require("./routes/monsterRoutes");
const apiRoutes = require("./routes/apiRoutes");
app.use("/monstras", monsterRoutes);
app.use("/api/monstras/v1", apiRoutes);

app.set("view engine", "ejs");

app.get("*", (req, res) => {
  res.redirect("/monstras");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
