const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const args = {
    cursor: {id: 2},
    orderBy: [{score: 'desc'}],
  }
  const int = await prisma.fooInt.findMany(args)
  const bigint = await prisma.fooBigInt.findMany(args)

  const orderByIdArgs = {
    cursor: {id: 2},
    orderBy: [{id: 'desc'}],
  }
  const bigintOrderById = await prisma.fooBigInt.findMany(orderByIdArgs)

  console.log('Int (score desc):\n', int)
  console.log('\nBigInt (score desc):\n', bigint)
  console.log('\nBigInt (id desc):\n', bigintOrderById)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

