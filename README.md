This is the source code for [ShastaAquariums.com](https://shastaaquariums.com/).

- [Project setup](#project-setup)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Unit Tests](#unit-tests)
  - [Perform Lint](#perform-lint)
  - [Env Variables](#env-variables)
- [Deploy on Vercel](#deploy-on-vercel)
- [Learn More about Next.js](#learn-more-about-nextjs)


# Project setup
```
pnpm install
```

## Compiles and hot-reloads for development
```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit Tests
Unit tests are ran using Cypress Component testing. 

To run the tests use `pnpm cypress:runComponent`

To open Cypress use `pnpm cypress:open`

## Perform Lint
```
pnpm lint
```

## Env Variables
```bash
  VITE_MAILTRAP_TOKEN=<TokenHere> # https://mailtrap.io/ token used for sending consult submissions
  VITE_MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/ #https://mailtrap.io/ endpoint used for sending consult submissions, default is 'https://send.api.mailtrap.io/'
```

# Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/) .

# Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
