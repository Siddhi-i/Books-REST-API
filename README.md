# 📚 Books REST API

## 📌 Project Description

This project is a simple REST API built using **Node.js** and **Express.js**.  
It performs basic CRUD (Create, Read, Update, Delete) operations on a list of books.

The data is stored in memory (no database required).

---

## 🚀 Features

- Get all books
- Get book by ID
- Add a new book
- Update an existing book
- Delete a book
- Proper status codes and error handling

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Postman (for API testing)
- VS Code

---

## 📂 Project Structure

```
books-api/
│── node_modules/
│── package.json
│── package-lock.json
│── server.js
│── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Clone or Download the Repository

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Server

```
node server.js
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 GET All Books

```
GET /books
```

Example:
```
http://localhost:3000/books
```

---

### 🔹 GET Book by ID

```
GET /books/:id
```

Example:
```
http://localhost:3000/books/1
```

---

### 🔹 Add New Book

```
POST /books
```

Body (JSON):
```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
```

---

### 🔹 Update Book

```
PUT /books/:id
```

Example:
```
PUT /books/1
```

Body (JSON):
```json
{
  "title": "Updated Title"
}
```

---

### 🔹 Delete Book

```
DELETE /books/:id
```

Example:
```
DELETE /books/2
```

---

## ⚠️ Important Note

This project uses **in-memory storage**.  
Data will reset whenever the server restarts.

---

## 🧪 Testing

All endpoints were tested using **Postman**.

---

## 👩‍💻 Author

Siddhi
