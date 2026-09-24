export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  comingSoon?: boolean;
  content?: string;
}

export const posts: Post[] = [
  {
    slug: "how-i-built-footies-by-zain",
    title: "How I Built a Full-Stack E-Commerce App in 3 Months",
    excerpt:
      "A deep dive into building Footies by Zain — from setting up authentication, cart management, checkout flow to deploying on Vercel.",
    date: "MARCH 2026",
    readTime: "8 min read",
    tag: "Case Study",
    comingSoon: false,
    content: `
# How I Built Footies by Zain

Building a full-stack e-commerce platform from scratch is one of the most rewarding engineering challenges. In this article, I share how I planned, architected, and deployed **Footies by Zain**, a modern web application for premium footwear.

## The Objective
The goal was to create a seamless, high-performance shopping experience complete with:
- Secure JWT User Authentication & Session Management
- Dynamic Cart & State Persistence across sessions
- Multi-step checkout pipeline
- Real-time Order Tracking and Admin Dashboard

## Technical Architecture
- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Material UI
- **Backend**: Express.js REST API with Node.js
- **Database**: MongoDB with Mongoose Schema validation
- **Deployment**: Vercel for Frontend, Render for Express API

## Key Takeaways & Lessons
1. **App Router Caching**: Learning to balance static page generation with dynamic real-time inventory updates was key to high Lighthouse scores.
2. **State Management**: Keeping cart state synced locally with zero latency while verifying pricing server-side prevented tampering.
3. **Type Safety**: End-to-end TypeScript interfaces ensured contract alignment between backend controllers and Next.js frontend services.
`,
  },
  {
    slug: "protected-routes-nextjs-middleware",
    title: "Understanding Protected Routes in Next.js with Middleware",
    excerpt:
      "A practical guide to securing pages in Next.js App Router using server middleware, cookies, and JWT tokens.",
    date: "MARCH 2026",
    readTime: "5 min read",
    tag: "Tutorial",
    comingSoon: false,
    content: `
# Securing Next.js App Router with Middleware

Route protection in Next.js has evolved significantly with the introduction of edge middleware.

## Why Middleware?
Before middleware, route protection happened on the client side (causing flash of unauthenticated content) or inside each \`getServerSideProps\` function individually. Middleware allows us to intercept incoming HTTP requests at the edge before any route handler runs.

\`\`\`typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
\`\`\`

## Key Practices
- Store auth tokens in \`HttpOnly\`, \`SameSite=Lax\` cookies.
- Match routes carefully using the \`matcher\` configuration.
- Handle token expiration gracefully with redirects.
`,
  },
  {
    slug: "building-devtrackr-from-idea-to-saas",
    title: "Building my first saas product: DevTracker",
    excerpt:
      "I finally built a SaaS product! A journey of building DevTracker from scratch with Next.js, NeonDB, and Clerk.",
    date: "APRIL 2026",
    readTime: "8 min read",
    tag: "Product Journey",
    comingSoon: false,
    content: `
# Building DevTracker: From Idea to Launch

Tracking developer progress, daily commits, and personal skill development can often feel scattered across multiple apps. I built **DevTracker** to solve this problem.

## What is DevTracker?
DevTracker provides a centralized dashboard for developers to:
- Log daily coding progress & streaks
- Set technical milestones and project goals
- Track learning paths across different programming domains

## Stack Choices
- **Auth**: Clerk for instant OAuth and passwordless authentication
- **Database**: Serverless PostgreSQL via NeonDB
- **Framework**: Next.js 16 with Server Actions
`,
  },
  {
    slug: "tmdb-movie-app-nextjs",
    title: "Building TMDB Movie App",
    excerpt:
      "Step by step guide to building a movie discovery app with search, movie details, cast info, and trailer playback using TMDB API.",
    date: "APRIL 2026",
    readTime: "5 min read",
    tag: "Projects",
    comingSoon: false,
    content: `
# Building a Movie Discovery App with TMDB API

API integration, debounced search inputs, and dynamic video modal players form the core of the TMDB Movie App.

## Features
- Real-time debounced movie search
- Dynamic genre filtering and trending carousels
- Video modal popup embedding YouTube trailers via TMDB video endpoints
`,
},
{
    slug: "building-seat-booking-out-of-my-comfort-zone",
    title: "Building a project out of my comfort zone: Seat Booking",
    excerpt:
      "Ditching Firebase for a real Postgres database, database-level concurrency locking, WebSockets, and JWT auth, then deploying it all with Docker.",
    date: "September, 2026",
    readTime: "10 min read",
    tag: "Projects",
    comingSoon: false,
    content: `
# Building Seat Booking From Scratch

Most of my recent projects leaned on Firebase, fast to ship, but it does a lot of the hard thinking for you. No real schema design, no real concurrency handling. So for this one, I deliberately took that away and built a live event seat-booking system: the kind of app where two people can try to grab the same seat at the exact same moment, and the system has to get that right.

## The stack

- **Frontend:** Next.js, TypeScript, Tailwind, React Query for server state, Zustand for auth state
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL, running in Docker
- **Real-time:** WebSockets (\`ws\`)
- **Auth:** bcrypt + JWT, no Firebase Auth
- **Deployment:** Docker, Railway (backend + database), Vercel (frontend)

## The core problem: double-booking

The hardest part of any booking system is what happens when two people click the same seat at the same instant. I solved this with a Postgres transaction using \`SELECT ... FOR UPDATE\`, which locks a seat row for the duration of the request, so if two holds race for the same seat, Postgres serializes them: one succeeds, the other gets a clean rejection instead of a corrupted double-booking.

I didn't just trust that it worked. I wrote a script that fires two hold requests at the same seat in the same instant and confirmed, under real concurrent load, that exactly one wins.

## Making it live

Holding a seat means nothing if other viewers don't see it happen. I added WebSocket rooms scoped per event, so a hold, confirm, or auto-release broadcasts instantly to everyone watching that event — no polling, no refresh. A synced countdown shows exactly when an abandoned hold will expire, driven by a background job that releases unconfirmed holds automatically.

## Real authentication

No Firebase Auth here either. Passwords are hashed with bcrypt, sessions are handled with signed JWTs, and Express middleware verifies every protected request. This closed a real gap along the way — early on, hold/confirm endpoints trusted whatever user ID the client sent, meaning anyone could impersonate anyone. Moving identity into a verified token fixed that properly.

## Shipping it

I containerized the backend with a Dockerfile and Docker Compose, then deployed the backend and Postgres on Railway and the frontend on Vercel, with HTTPS and secure WebSockets handled automatically at the edge.

The biggest lessons weren't in the features — they were in the debugging: silent mismatches between what the backend broadcast and what the frontend listened for, stale WebSocket connections after a server restart, and one real scare where a secret briefly ended up in a public commit before I caught and rotated it. Every one of those taught me more than the working code did.
`,
  },
  {
    slug: "swr-vs-useeffect",
    title: "Why I Switched from useEffect to SWR for Data Fetching",
    excerpt:
      "How SWR changed the way I fetch data in React — better caching, less boilerplate, and improved user experience.",
    date: "COMING SOON",
    readTime: "4 min read",
    tag: "React",
    comingSoon: true,
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Performance Optimization in Next.js — What Actually Works",
    excerpt:
      "Real lessons from optimizing a Next.js e-commerce app — image optimization, caching strategies, and Lighthouse scores.",
    date: "COMING SOON",
    readTime: "6 min read",
    tag: "Performance",
    comingSoon: true,
  },
  {
    slug: "my-journey-to-fullstack",
    title: "My Journey from Zero to Full-Stack in 18 Months",
    excerpt:
      "How I went from learning HTML/CSS to building and deploying full-stack applications — what worked, what did not, and what I wish I knew earlier.",
    date: "COMING SOON",
    readTime: "7 min read",
    tag: "Personal",
    comingSoon: true,
  },
];
