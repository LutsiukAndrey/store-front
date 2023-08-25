Full Stack Store : Next.js 13 React, Tailwind, Prisma, MySQL, Clerc, Stripe


## Getting Started

1.Clone this repository:

```
git clone https://github.com/LutsiukAndrey/store-front.git
```

2.Install project dependencies:
```
npm install
```
3.Add .env

```
NEXT_PUBLIC_API_URL={http://localhost:3000/}
```
4. Conect to PlanetScale and push Prisma
```
npx prisma generate
npx prisma db push

```


5.Start the development server:

```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


