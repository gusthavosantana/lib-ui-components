## Flowbite

1. Install Flowbite:

```bash
pnpm add flowbite flowbite-react
```

2. Add Flowbite to tailwind.config.js

```js
...
content: [
    "./node_modules/flowbite/**/*.js",
    ...
  ],
...
```

## Jest

1. Install:

```bash
pnpm install -D vitest @vitejs/plugin-react jsdom @testing-library/react
```

2. Create a vitest.config.ts|js file in the root of your project, and add the following options:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```
