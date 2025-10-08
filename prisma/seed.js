const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const u1 = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      name: 'Alice Example',
      email: 'alice@example.com'
    }
  });
  const u2 = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      name: 'Bob Example',
      email: 'bob@example.com'
    }
  });
  console.log('Seeded users:', u1.email, u2.email);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
