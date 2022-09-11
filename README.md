# Next.js Learning Website with Learn API

This is a [Next.js](https://nextjs.org/) project template for learning websites with example implementation of [Learn API](https://github.com/orzechdev/learn-api). You can clone this repository to build learning website with it.

![Project preview](readme-image-1.png)

Go to [learning-website.vercel.app](https://learning-website.vercel.app) to see example deployment:

- On [/courses](https://learning-website.vercel.app/courses) you can see all available courses within the website.
- On [/learnapi/items](https://learning-website.vercel.app/learnapi/items) you can see all data about available courses within the website, prepared according to [Learn API](https://github.com/orzechdev/learn-api).
- On [/learnapi/state](https://learning-website.vercel.app/learnapi/state) you can see progress state within particular courses for given user - you need to add uniqely generated user learning key to request headers as `Authorization: Bearer <learning-key>`, according to [Learn API](https://github.com/orzechdev/learn-api).

## Getting Started

The project is using [Supabase](https://supabase.com) to persist user learning state within PostgreSQL, via [Prisma.js](https://github.com/prisma/prisma), so make sure you have setup project to connect with before continuing. Prisma.js also works with other servers so you can also connect to any other database [accordingly](https://www.prisma.io/docs/).

Setup environment variables in `.env` file, according to `.env.template`. If you use Vercel for deployment, then add variables in Vercel dashboard accordingly.

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the courses by modifying `data/items.ts` and `pages/courses/*` accordingly. The pages auto-updates as you edit the pages files. The endpoint `http://localhost:3000/learnapi/items` auto-updates as you edit data files.
