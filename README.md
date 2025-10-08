# User Management API (CRUD) - Node.js + Express + Prisma + PostgreSQL

This is a starter project to learn how to build a simple REST API using Node.js, Express and Prisma (Postgres).

## Requirements
- Node.js 16+
- npm
- Docker & Docker Compose (recommended for PostgreSQL local)

## Quick start (development)

1. Copy `.env.example` to `.env` and adjust `DATABASE_URL` if needed.
2. Start a local Postgres with Docker Compose:
   ```bash
   docker-compose up -d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Seed sample data (optional):
   ```bash
   npm run seed
   ```
6. Start server:
   ```bash
   npm run dev
   ```
7. API base: `http://localhost:3000/api/users`

## Endpoints
- `POST /api/users` - Create user (body: `{ "name": "...", "email": "..." }`)
- `GET /api/users` - List users
- `GET /api/users/:id` - Get user by id
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Testing
- Basic tests are included using Jest + Supertest. Make sure your DB is up and migrations ran before running tests:
  ```bash
  npm test
  ```

## Next steps / learning suggestions
- Add authentication (JWT)
- Add pagination and query filters
- Add input sanitization / rate limiting
- Add CI (GitHub Actions) and deploy with Docker
