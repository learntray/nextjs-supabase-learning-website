# Learn API - Next.js Example

This is a [Next.js](https://nextjs.org/) project template for learning websites with example implementation of [Learn API](https://github.com/orzechdev/learn-api). You can clone this repository to build learning website with it.

![Project preview](readme-image-1.png)

Go to [learn-api-example.vercel.app](https://learn-api-example.vercel.app) to see example deployment:

- On [/courses](https://learn-api-example.vercel.app/courses) you can see all available courses within the website.
- On [/learnapi/items](https://learn-api-example.vercel.app/learnapi/items) you can see all data about available courses within the website, prepared according to [Learn API](https://github.com/orzechdev/learn-api).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the courses by modifying `data/items.ts` and `pages/courses/*` accordingly. The pages auto-updates as you edit the pages files. The endpoint `http://localhost:3000/learnapi/items` auto-updates as you edit data files.
