# User Management API Example

A simple **User Management REST API** built with **Node.js, Express, Prisma, and PostgreSQL**.

---

## 🧾 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## About

This project demonstrates a basic CRUD API for user management.  
It’s designed as a learning resource or a starting point for building scalable back-end applications.

**Features:**
- Create, read, update, and delete users  
- Input validation and error handling  
- Database persistence using Prisma ORM  
- Modular and extensible project structure  

---

## Tech Stack

| Component | Purpose |
|------------|----------|
| **Node.js** | Runtime environment |
| **Express** | Web framework / routing |
| **Prisma** | Database ORM |
| **PostgreSQL** | Relational database |
| **dotenv** | Environment variables management |

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rolitous/user-management-api-example.git
cd user-management-api-example

npm install
# or
# yarn install
```

## Configuration

Create a .env file in the root directory with the following content:

DATABASE_URL="postgresql://user:password@localhost:5432/your_database"
PORT=3000

Run Prisma migrations (or generate the client):

```bash
npx prisma migrate dev --name init
# or
npx prisma generate
```

# Usage

Start the development server:

```bash
npm run dev
# or
npm start
```

By default, the API will run on the port defined in the .env file.
Test the endpoints using Postman, Insomnia, or cURL.

## API Endpoints

- `POST /api/users` - Create user (body: `{ "name": "...", "email": "..." }`)
- `GET /api/users` - List users
- `GET /api/users/:id` - Get user by id
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user