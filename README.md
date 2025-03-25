This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the Mysql:

```bash
# run the mysql
docker compose -f ./docker/docker-compose-mysql.yaml up -d
# run the prisma
npm run db:init
# generate prisma client
npm run db:gc
# mock  data
npm run db:mock
```

Second，run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Example

- Show post list: [http://localhost:3000/posts](http://localhost:3000/posts)
- Create post : [http://localhost:3000/posts/create](http://localhost:3000/posts/create)
- Show Item Post : [http://localhost:3000/posts/1](http://localhost:3000/posts/1)


