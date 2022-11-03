<h1 align="center">Learning Website Template with Next.js and Supabase</h1>

This is a template from which you can start create learning website. It is built with:
- [Next.js](https://nextjs.org/) - framework to create websites,
- [Supabase](https://supabase.com) - service to store user data and manage user-related features,
- [Learn API](https://github.com/learntray/learn-api) - (experimental) API to fetch user learning state and manage user participation in courses by external service.

![Project preview](readme-image-1.png)

## Project description

Go to [learning-website.vercel.app](https://learning-website.vercel.app) to see example deployment:

- on [/courses](https://learning-website.vercel.app/courses) you can see all available courses within the website,
- on [/learnapi/items](https://learning-website.vercel.app/learnapi/items) and [/learnapi/state](https://learning-website.vercel.app/learnapi/state) you can see all data about available courses within the website and users learning state accordingly, prepared according to [Learn API](https://github.com/learntray/learn-api).

## Getting Started

### 1. Configuring user learning state persistance

The project is using Supabase to persist user learning state within PostgreSQL database. You can create and configure Supabase project on [Supabase website](https://supabase.com). Alternatively you can setup your own database on your own server.

The communication with database in both options is done in the project via Prisma.js library. You can learn more about it on [Prisma.js docs](https://www.prisma.io/docs/).

### 2. Configuring project

The project uses environment variables to securely persist configuration secrets like database configuration variables. You can setup them by creating `.env` file and filling it according to `.env.template`.

Before running project locally, you need to install project dependencies by executing the following commands from the project directory:

```bash
yarn install
# or
npm install
```

### 3. Develop

You can run the development server by executing the following commands from the project directory:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the courses by modifying `pages/*` and `data/items.ts` accordingly. The pages auto-updates as you edit pages files. The endpoints  `http://localhost:3000/websiteapi/*` and `http://localhost:3000/learnapi/*` auto-updates as you edit data files.

To learn more of how to develop the website you can check out [Next.js tutorial](https://nextjs.org/learn) and [Supabase guides](https://supabase.com/docs).

### 4. Deployment

To preview the project on the web you can use Vercel by creating an project on [Vercel website](https://vercel.com/) and project mentioned in 1. step on [Supabase website](https://supabase.com/). After creating the project you will also need to add previously setup environment variables from `.env` in Vercel dashboard accordingly.
