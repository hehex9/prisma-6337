const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const rows = [
  {id: 1, score: 1},
  {id: 2, score: 2},
  {id: 3, score: 3},
]

async function main() {
  for (const data of rows) {
    await prisma.fooInt.create({data})
    await prisma.fooBigInt.create({data})
  }

  console.log('FooInt:', await prisma.fooInt.findMany())
  console.log('FooBigInt:', await prisma.fooBigInt.findMany())
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
