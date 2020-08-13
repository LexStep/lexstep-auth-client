# lexstep-auth-client

Barebones client built using Next.js that allows you to retrieve a JWT from auth0 for testing.

## Configuration

Add a `.env.local` file at project root with the following contents:

```bash
#.env.local
AUTH0_DOMAIN='lexstep.eu.auth0.com'
AUTH0_CLIENT_ID='1ZPQBUKt2DwVSpCX3m1Py2bz7qwG95Lu'
AUTH0_CLIENT_SECRET='SECRET'
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
