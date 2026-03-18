import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "../../components/BlogPost";

const posts = [
  {
    slug: "how-i-built-footies-by-zain",
    title: "How I Built a Full-Stack E-Commerce App in 3 Months",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Project",
    color: "text-blue-400",
    content: `
## Overview

Footies by Zain is a full-stack e-commerce platform for premium footwear. I built it from scratch using Next.js for the frontend and Express.js with MongoDB for the backend. The goal was to build something real — not a tutorial project, but an actual working application.

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Material UI, SWR
- **Backend:** Express.js, MongoDB, Mongoose, JWT
- **Deployment:** Vercel (frontend + backend)

## The Challenges

### Authentication
The first real challenge was building JWT authentication from scratch. I had to learn how tokens work, how to store them securely using both localStorage and cookies, and how to protect routes using Next.js middleware.

### Cart Management
Building a cart with React Context that persists across pages and handles stock limits was trickier than expected. The key insight was storing cart state in localStorage so it survives page refreshes.

### Checkout Flow
The multi-step checkout (Delivery Info → Payment → Success) required careful state management. I used React useState to track which step the user was on and pre-filled delivery info from the user's profile.

### Admin Dashboard
Building the admin dashboard taught me a lot about role-based access control. Admins get a different token, different routes, and different middleware checks.

## What I Learned

- How to build and consume a REST API end to end
- JWT authentication and protected routes
- MongoDB data modeling and Mongoose
- Next.js App Router, middleware, and server components
- Performance optimization and Lighthouse scores
- Deploying full-stack apps on Vercel

## Conclusion

This project took about 3 months of consistent work. It's the project I'm most proud of because it's real, it's deployed, and it works. If you want to check it out, visit [footiesbyzain.vercel.app](https://footiesbyzain.vercel.app).
    `,
  },
  {
    slug: "protected-routes-nextjs-middleware",
    title: "Understanding Protected Routes in Next.js with Middleware",
    date: "March 2026",
    readTime: "5 min read",
    tag: "Tutorial",
    color: "text-purple-400",
    content: `
## What are Protected Routes?

Protected routes are pages that should only be accessible to authenticated users. For example, a user's profile page or checkout page should redirect to login if the user isn't logged in.

## The Wrong Way — Client-Side Only

Many beginners check authentication inside the component using useEffect:

\`\`\`tsx
useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) router.push('/login');
}, []);
\`\`\`

The problem? The page renders briefly before the redirect — users see a flash of the protected content. This is called FOUC (Flash of Unstyled/Unauthorized Content).

## The Right Way — Next.js Middleware

Next.js middleware runs on the server before the page loads. No flash, no delay.

\`\`\`ts
// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/profile", "/checkout"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(
        new URL("/login?redirect=" + pathname, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/checkout/:path*"],
};
\`\`\`

## Why Cookies and Not localStorage?

Middleware runs on the server — it has no access to localStorage. Cookies are sent with every request automatically, so the server can read them.

When the user logs in, save the token to both:

\`\`\`ts
localStorage.setItem('token', data.token);
document.cookie = \`token=\${data.token}; path=/; max-age=\${7 * 24 * 60 * 60}\`;
\`\`\`

## Conclusion

Always use middleware for route protection in Next.js. It's cleaner, faster and more secure than client-side checks.
    `,
  },
  {
    slug: "tmdb-movie-app-nextjs",
    title: "Building a Movie Discovery App with TMDB API and Next.js",
    date: "March 2025",
    readTime: "5 min read",
    tag: "Tutorial",
    color: "text-cyan-400",
    content: `
## Overview

I built a movie discovery web application using the TMDB (The Movie Database) API that allows users to explore trending movies and TV shows in a clean, responsive interface. The goal was to build something visually engaging — inspired by modern streaming platforms like Netflix — while learning how to work with a real third-party API.

You can check it out live at [tdmb-tau.vercel.app](https://tdmb-tau.vercel.app).

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **State Management:** Redux Toolkit
- **Styling:** CSS Modules / Styled Components
- **API:** TMDB REST API
- **Deployment:** Vercel

## Key Features

### Real-Time Search
Users can search for any movie or TV show and get instant results. I implemented debouncing to avoid firing API calls on every keystroke — only searching after the user stops typing for 500ms.

### Dynamic Filtering
Users can switch between Movies and TV Shows with a single click. The filter updates the API endpoint and re-renders the results without a full page reload.

### Horizontal Scrolling Layout
One of the most satisfying UI features was the horizontal scrolling card layout — similar to what you see on Netflix. Each row represents a category (Trending, Popular, Latest) and scrolls independently.

\`\`\`tsx
// Example of horizontal scroll container
<div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
  {movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>
\`\`\`

### Latest Trailers
Each movie has a trailer section that fetches the official YouTube trailer from TMDB and plays it directly in the app — no redirecting to YouTube.

### Dynamic Routing
Clicking on any movie takes you to a dedicated detail page at \`/movies/[id]\` with full info — cast, overview, ratings, runtime and related movies.

## State Management with Redux Toolkit

Managing search results and movie data across multiple components needed a proper solution. I used Redux Toolkit because:

- **createSlice** makes reducers clean and readable
- **createAsyncThunk** handles async API calls with loading/error states
- The Redux DevTools extension made debugging easy

\`\`\`tsx
const moviesSlice = createSlice({
  name: 'movies',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
\`\`\`

## Challenges I Faced

### TMDB API Rate Limits
TMDB has rate limits so I had to implement proper error handling and avoid unnecessary API calls. Caching results with Redux helped reduce repeated requests.

### Image Optimization
TMDB returns image paths like \`/abc123.jpg\` — not full URLs. I had to prepend the base URL:

\`\`\`ts
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
const imageUrl = \`\${IMAGE_BASE}\${movie.poster_path}\`;
\`\`\`

### Responsive Design
Making the horizontal scroll work properly on both mobile and desktop took some work. The key was using \`overflow-x-auto\` with \`scrollbar-hide\` and fixed card widths.

## What I Learned

- How to work with a real third-party REST API
- Redux Toolkit for scalable state management
- Dynamic routing in Next.js App Router
- Building Netflix-inspired UI layouts
- Optimizing data fetching for fast load times

## Conclusion

This project was my first big project, so i was getting instructions on what part to build and what not, a great way to practice working with external APIs and state management at scale. The TMDB API is well documented and perfect for building portfolio projects. Check out the live app at [tdmb-tau.vercel.app](https://tdmb-tau.vercel.app) and the code on my [GitHub](https://github.com/kilan080).
  `,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
