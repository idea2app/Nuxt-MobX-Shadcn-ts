# Nuxt-MobX-Shadcn-ts

[Nuxt 4][1] project scaffold based on [TypeScript 5][2], [MobX][3] & [Shadcn-vue][4], which is inspired by [Vue-MobX-Prime-ts][5].

[![CI & CD](https://github.com/idea2app/Nuxt-MobX-Shadcn-ts/actions/workflows/main.yml/badge.svg)][6]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][7]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][8]

## Technology Stack

- **Language**: [TypeScript 5][2] + [ES Decorator][9] (stage-3)
- **Component engine**: [Vue 3][10]
- **Framework**: [Nuxt 4][1]
- **Component suite**: [Shadcn-vue][4]
- **State management**: [MobX 6][3]
- **MDX support**: [@mdx-js/mdx][11]
- **Decorator support**: [Vue facing decorator 4][12]

## Features

### MobX Integration

This scaffold uses the [`mobx-vue-helper`][13] package, which provides an `@observer` decorator that makes Vue components reactive to MobX observable state changes, similar to `mobx-react`. It supports both class components and function components.

#### Usage with Class Components

```tsx
import { Vue, Component, toNative } from 'vue-facing-decorator';
import { observer } from 'mobx-vue-helper';

import counterStore from './models/Counter';

@Component
@observer
class MyMobX extends Vue {
  render() {
    return (
      <button onClick={() => counterStore.increment()}>
        Count: {counterStore.count}
      </button>
    );
  }
}
export default toNative(MyMobX);
```

#### Usage with Function Components

```tsx
import { observer } from 'mobx-vue-helper';

import counterStore from './models/Counter';

export const MyMobX = observer(() => (
  <button onClick={() => counterStore.increment()}>
    Count: {counterStore.count}
  </button>
));
```

### MDX Dynamic Rendering

This scaffold demonstrates server-side rendering of Markdown content using [@mdx-js/mdx][11]. The MDX content is evaluated during the SSR phase and custom components can replace default HTML elements.

```tsx
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'vue/jsx-runtime';
import { Link } from './components/Link';

const { default: MDXContent } = await evaluate(markdownContent, runtime);

// Replace <a> tags with custom Link component
<MDXContent components={{ a: Link }} />
```

## Project Structure

```
app/
├── app.tsx              # App shell with navigation
├── components/
│   └── Link.tsx         # Custom link component for MDX
├── models/
│   └── Counter.ts       # MobX counter store
└── pages/
    ├── index.tsx        # Home page with MobX examples
    └── MDX.tsx          # MDX dynamic rendering demo
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
# pnpm
pnpm install
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
# pnpm
pnpm dev
# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
# pnpm
pnpm build
# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview
# pnpm
pnpm preview
# bun
bun run preview
```

## Deployment

Check out the [Nuxt deployment documentation][14] for more information.

## Best Practices

1. Install GitHub apps in your organization or account:
   - [Probot settings][15]: set up Issue labels & Pull Request rules
   - [PR badge][16]: set up Online [VS Code][17] editor entries in Pull Request description

2. Click the **Use this template button** to create your own repository

3. Click the **Open in GitHub codespaces button** to start an online VS Code development environment immediately

4. Set [Vercel variables][18] as [Repository secrets][19], then every commit will get an independent **Preview URL**

5. Recommend to add a Notification step in GitHub actions for your Team IM app

6. Remind the PMs & users to submit **Feature/Enhancement** requests or **Bug** reports with Issue forms

7. Collect all issues into Project kanbans, then create **Pull requests** with `closes #issue_number` in the description for automation

## Recommended IDE Setup

- [VS Code][17] + [TypeScript Vue Plugin (Volar)][20] + [Prettier][21]

[1]: https://nuxt.com/
[2]: https://www.typescriptlang.org/
[3]: https://mobx.js.org/
[4]: https://www.shadcn-vue.com/
[5]: https://github.com/idea2app/Vue-MobX-Prime-ts
[6]: https://github.com/idea2app/Nuxt-MobX-Shadcn-ts/actions/workflows/main.yml
[7]: https://codespaces.new/idea2app/Nuxt-MobX-Shadcn-ts
[8]: https://gitpod.io/?autostart=true#https://github.com/idea2app/Nuxt-MobX-Shadcn-ts
[9]: https://github.com/tc39/proposal-decorators
[10]: https://vuejs.org/
[11]: https://mdxjs.com/
[12]: https://facing-dev.github.io/vue-facing-decorator/
[13]: https://github.com/idea2app/MobX-Vue-helper
[14]: https://nuxt.com/docs/getting-started/deployment
[15]: https://probot.github.io/apps/settings/
[16]: https://pullrequestbadge.com/
[17]: https://code.visualstudio.com/
[18]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L11
[19]: https://github.com/idea2app/Nuxt-MobX-Shadcn-ts/settings/secrets/actions
[20]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[21]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
