const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Shourya's Portfolio</title>
        </head>
        <body>
            <h1>Shourya's Portfolio</h1>
            <h2>I'm a Web Developer</h2>
            <hr />
            <h3><a href="/movie-ranking">Movie Ranking Project</a></h3>
            <img src="/images/movie-ranking.png" height="200" alt="movie ranking project preview"/>
            <h3><a href="/birthday-invite">Birthday Invite Project</a></h3>
            <img src="/images/birthday-invite.png" height="200" alt="birthday invite project preview"/>
            <hr />
            <a href="/about">About Me</a>
            <a href="/contact">Contact Me</a>
        </body>
        </html>
    `);
});

app.get("/movie-ranking", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "movie-ranking.html"));
});

app.get("/birthday-invite", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "birthday-invite.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});