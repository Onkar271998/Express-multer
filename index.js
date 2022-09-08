// const express = require("express");

// const port = 8000;
// const multer = require("multer");
// app = express();

// const express = require("express");
// const multer = require("multer");

// const app = express();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `${__dirname}/Upload`);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/", upload.single("avatar"), function (req, res, next) {
//   res.send("file uploaded successfully");
// });

// app.listen(port, () => {
//   console.log("started");
// });

const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/Upload`);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Welcome To Homepage");
});

app.post("/file", upload.single("avatar"), (req, res) => {
  res.send("file uploaded successfully");
});

app.listen(3000, () => {
  console.log("Listening on port 8080");
});
