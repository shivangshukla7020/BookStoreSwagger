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
| `addBook`        | `/book`                      | POST   |
| `updateBook`     | `/book`                      | PUT    |
| `findById`       | `/book/:bookId`              | GET    |
| `deleteBook`     | `/book/:bookId`              | DELETE |
| `findByStatus`   | `/book/findByStatus`         | GET    |
| `updateBookForm` | `/book/:bookId`              | POST   |
| `uploadImage`    | `/book/:bookId/uploadImage`  | POST   |

### 🛒 Order Service (`http://localhost:3002`)

| Function         | Endpoint            | Method |
|------------------|---------------------|--------|
| `addOrder`       | `/order`           | POST   |
| `findById`       | `/order/:orderId`  | GET    |
| `deleteOrder`    | `/order/:orderId`  | DELETE |
| `getInventory`   | `/order/inventory` | GET    |

### 👤 User Service (`http://localhost:3003`)

| Function       | Endpoint           | Method |
|----------------|--------------------|--------|
| `addUser`      | `/user`           | POST   |
| `updateUser`   | `/user`           | PUT    |
| `findById`     | `/user/:userId`   | GET    |
| `deleteUser`   | `/user/:userId`   | DELETE |

---


### SWAGGER UI AT (`http://localhost:300{1,2,3}/api-docs`)
