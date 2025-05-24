# 📚 Swagger Book Store API

This is a microservices-based Book Store API built with **Node.js**, **Express**, and **Swagger (OpenAPI 3.0)**. The system includes three independent services:

- `book-service`
- `order-service`
- `user-service`

---

## 🧩 Microservices Overview

| Service Name    | Description                         | Port  |
|-----------------|-------------------------------------|--------|
| `book-service`  | Manages books and their media       | `3001` |
| `order-service` | Handles orders and inventory        | `3002` |
| `user-service`  | Manages user data                   | `3003` |

---

## 🔗 API Endpoints Overview

### 📘 Book Service (`http://localhost:3001`)

| Function         | Endpoint                      | Method |
|------------------|-------------------------------|--------|
| `addBook`        | `/books`                      | POST   |
| `updateBook`     | `/books`                      | PUT    |
| `getBookById`    | `/books/:bookId`              | GET    |
| `deleteBook`     | `/books/:bookId`              | DELETE |
| `findByStatus`   | `/books/findByStatus`         | GET    |
| `updateBookForm` | `/books/:bookId`              | POST   |
| `uploadImage`    | `/books/:bookId/uploadImage`  | POST   |

### 🛒 Order Service (`http://localhost:3002`)

| Function         | Endpoint            | Method |
|------------------|---------------------|--------|
| `addOrder`       | `/orders`           | POST   |
| `getOrderById`   | `/orders/:orderId`  | GET    |
| `deleteOrder`    | `/orders/:orderId`  | DELETE |
| `getInventory`   | `/orders/inventory` | GET    |

### 👤 User Service (`http://localhost:3003`)

| Function       | Endpoint           | Method |
|----------------|--------------------|--------|
| `addUser`      | `/users`           | POST   |
| `updateUser`   | `/users`           | PUT    |
| `findById`     | `/users/:userId`   | GET    |
| `deleteUser`   | `/users/:userId`   | DELETE |

---


### SWAGGER UI AT (`http://localhost:300{1,2,3}/api-docs`)