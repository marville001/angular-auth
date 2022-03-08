const express = require("express");
const cors = require("cors");
const path = require("path");

const api = require("./routes/api");
const port = process.env.PORT || 5500;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json());

app.use("/api", api);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(port, function () {
    console.log("Server running on localhost:" + port);
});
