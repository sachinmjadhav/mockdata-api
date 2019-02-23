const express = require("express");
const users = require("./endpoints/users");
const posts = require("./endpoints/posts");
const comments = require("./endpoints/comments");
const albums = require("./endpoints/albums");
const photos = require("./endpoints/photos");
const todos = require("./endpoints/todos.json");

const app = express();

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/comments", (req, res) => {
  res.json(comments);
});

app.get("/api/albums", (req, res) => {
  res.json(albums);
});

app.get("/api/photos", (req, res) => {
  res.json(photos);
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
