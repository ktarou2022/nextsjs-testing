This is a Next.js project bootstrapped with create-next-app.

# Project setup : Nextjs+React-testing-library+TypeScript+Tailwind CSS

## create-next-app

```s
npx create-next-app . --use-npm
```

```s
npm i axios@0.21.1 msw@0.35.0 swr
```

## project 直下に .prettierrc を作成

```json
{
  "singleQuote": true,
  "semi": false
}
```

## React testing library

```s
npm i react@17.0.2 react-dom@17.0.2
```

```s
npm i next@11.1.2
```

```s
npm i -D jest@26.6.3 @testing-library/react@11.2.3 @types/jest@26.0.20 @testing-library/jest-dom@5.11.8 @testing-library/dom@7.29.2 babel-jest@26.6.3 @testing-library/user-event@12.6.0 jest-css-modules@2.1.0
```

## project直下に .babelrc を作成

```json
    {
        "presets": ["next/babel"]
    }
```

## package.json に jest の設定を追記

```json
    "jest": {
        "testPathIgnorePatterns": [
            "<rootDir>/.next/",
            "<rootDir>/node_modules/"
        ],
        "moduleNameMapper": {
            "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
        }
    }
```

## package.json の script...に "test"を追記

```json
"test": "jest --env=jsdom --verbose"
```

## Typescript

https://nextjs.org/learn/excel/typescript/create-tsconfig

```s
touch tsconfig.json
```

```s
npm i -D typescript @types/react@17.0.41 @types/node
```

## Tailwind CSS

https://tailwindcss.com/docs/guides/nextjs


```s
npm i tailwindcss@latest postcss@latest autoprefixer@latest
```

```s
npx tailwindcss init -p
```

## tailwind.config.js に追記

```js
content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
```

## global.css

```s
@tailwind base;
@tailwind components;
@tailwind utilities;
```
