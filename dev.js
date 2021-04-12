const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const args = {
    cursor: {id: 2},
    orderBy: [{score: 'desc'}],
  }

  const int = await prisma.fooInt.findMany(args)
  const bigint = await prisma.fooBigInt.findMany(args)

  console.log('Int:\n', int)
  console.log('\nBigInt:\n', bigint)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

