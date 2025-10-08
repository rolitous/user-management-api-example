const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/prisma');

describe('Users API (basic)', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('GET /api/users returns 200 and array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  }, 10000);
});
