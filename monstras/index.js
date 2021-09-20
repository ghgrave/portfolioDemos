const express = require("express");
const app = express();

const monsterRoutes = require("./routes/monsterRoutes");
app.use("/monstras", monsterRoutes);

app.set("view engine", "ejs");

app.get("*", (req, res) => {
  res.redirect("/monstras");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
