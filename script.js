const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [];
let nextId = 1;

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body || {};
  if (!title || !author) {
    return res.status(400).json({ error: "title and author are required" });
  }
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "book not found" });
  }
  const { title, author } = req.body || {};
  if (!title && !author) {
    return res.status(400).json({ error: "provide title or author" });
  }
  const updated = { ...books[index] };
  if (title) updated.title = title;
  if (author) updated.author = author;
  books[index] = updated;
  res.json(updated);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "book not found" });
  }
  const [removed] = books.splice(index, 1);
  res.json(removed);
});

app.get("/", (req, res) => {
  res.send("Books API running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
