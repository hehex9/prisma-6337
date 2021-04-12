# Minimal, Reproducible Example for prisma/prisma#6337

## Getting Started

1. Clone and install dependencies

```sh
git clone git@github.com:hehex9/prisma-6337.git
cd prisma-6337
yarn // or npm install
```

2. Create the database

```sh
npx prisma migrate dev --name init
npx prisma db seed --preview-feature
```

3. Run the script

```sh
node dev.js
```

## Data Table

Tables: FooInt/FooBigInt

|id|score ↓|
|-|-|
|3|3|
|2|2|
|1|1|

## findManyArgs
```js
const args = {
  cursor: {id: 2},
  orderBy: [{score: 'desc'}],
}
// await prisma.[fooInt|fooBigInt].findMany(args)
```

## Expected

```
Int (score desc):
 [ { id: 2, score: 2 }, { id: 1, score: 1 } ]

BigInt (score desc):
 [ { id: 2n, score: 2 }, { id: 1n, score: 1 } ]

BigInt (id desc):
 [ { id: 2n, score: 2 }, { id: 1n, score: 1 } ]
```

## Actual

```
Int (score desc):
 [ { id: 2, score: 2 }, { id: 1, score: 1 } ]

BigInt (score desc):
 []

BigInt (id desc):
 [ { id: 2n, score: 2 }, { id: 1n, score: 1 } ]
```
