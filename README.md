# Churras Trinca

## About
This project has created with Next JS - Manual Setup. The main tecnolgies are: 
* [Next.js](https://github.com/vercel/next.js)
* [React](https://github.com/facebook/react/)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-components](https://styled-components.com/)

## Usage
Install  the dependencies with [Node.js](https://nodejs.org/en/)

```
$ npm install
```

or 

```
$ yarn
```
## Development

```
$ npm run dev
```
or
```
$ yarn dev
```

## Tests

```
$ npm run test
```
or
```
$ yarn test
```

## Linter

```
$ npm run lint
```
or
```
$ yarn lint
```

## Production 

Create container

```
$ docker build -t churras-frontend .
```

Start container

```
$ docker run -it -p 80:80 --rm --name running-churras-frontend churras-frontend
```
