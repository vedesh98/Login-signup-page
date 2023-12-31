const { error } = require("console");
const express = require("express");
const app = express();
require('dotenv').config();
const fs = require("fs");



console.log(__dirname)
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/src'));


app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/newlogin.html");
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + "/bhoolku.html");
});

app.get("/video", async (req, res) => {
    // const range = req.headers.range;
    // if (!range) {
    //     res.status(400).send("Requires Range header");
    // }
    // const videoPath = process.env.VIDEO_NAME;
    // const videoSize = fs.statSync(videoPath).size;

    // const CHUNK_SIZE = 10 ** 6;
    // const start = Number(range.replace(/\D/g, ""));
    // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // const contentLength = end - start + 1;
    // const headers = {
    //     "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    //     "Accept-Ranges": "bytes",
    //     "Content-Length": contentLength,
    //     "Content-Type": "video/mp4",
    // };

    // res.writeHead(206, headers);
    // const videoStream = fs.createReadStream(videoPath, { start, end });

    // videoStream.on('error',(error)=>{ console.log(error)}).pipe(res).on("finish",()=>{console.log(`*****------Finished------${start}*****`)});

});

app.listen(process.env.PORT, () => { console.log(`Listening on port ${process.env.PORT}!`); });