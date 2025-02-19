CabX - Uber Clone

CabX is a full-stack ride-hailing web application inspired by Uber. Built using the latest technologies, including Next.js 13, React.js, Tailwind CSS, Google Maps API, and Stripe, it provides a seamless experience for users to book rides, track drivers in real-time, and make secure payments.

Features

User Authentication - Secure login/signup with NextAuth

Ride Booking - Users can book rides by selecting pickup and drop-off locations

Real-time Location Tracking - Integrated with Google Maps API for dynamic route updates

Payment Integration - Secure payments via Stripe API

Responsive UI - Tailwind CSS for a sleek and mobile-friendly design

Optimized Performance - Server-side rendering (SSR) and static site generation (SSG) with Next.js 13

Tech Stack

Frontend: Next.js 13, React.js, Tailwind CSS

Backend: Next.js API Routes

Database: Firebase / MongoDB (optional for user data storage)

APIs: Google Maps API, Stripe API

Authentication: NextAuth.js

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

#Usage
Users can sign up, log in, and request a ride.
The app calculates the estimated fare and displays the route.
Users can make payments using Stripe.
Drivers can accept ride requests and navigate using Google Maps.
#Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.



