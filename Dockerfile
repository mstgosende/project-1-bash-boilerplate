# 1. We use the official Playwright image to ensure the tests run
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# 2. We install PNPM globally using Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# 3. Working directory
WORKDIR /project

# 4. We copy the dependency files first (Optimizes Docker caching)
COPY package.json pnpm-lock.yaml ./

# 5. We install everything (including Playwright)
RUN pnpm install

# 6. We copy the rest of the app code
COPY . .

# 7. Expose port 3000 used by your app
EXPOSE 3000

# 8. When starting the container, start the development server
CMD ["pnpm", "run", "dev"]
