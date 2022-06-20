const express = require("express");
const app = express();

app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(3000, () => {
  console.log("server is running...");
});

//client 빌드 -> build 폴더를 server폴더로 이동 -> 서버 실행

// client 폴더 이동
// npm ci
// npm run build
// client/build -> server/build로 이동

// client 폴더 이동
// npm ci
// node app.js
