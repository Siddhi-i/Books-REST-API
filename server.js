const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// In-memory data
let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
];

// ==========================
// GET all books
// ==========================
app.get("/books", (req, res) => {
    res.json(books);
});

// ==========================
// GET book by ID
// ==========================
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

// ==========================
// POST new book
// ==========================
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and Author are required" });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// ==========================
// PUT update book
// ==========================
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// ==========================
// DELETE book
// ==========================
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(bookIndex, 1);

    res.json({ message: "Book deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
