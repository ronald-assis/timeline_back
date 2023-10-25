<p>Rode o comando no terminal dentro do diretorio do projeto: <b>export $(cat .env | xargs)</b>.
Para não precisar instalar o dotenv</p>

<h1>💻 Project</h1>

A memory app where users can add texts, photos and videos of important events in their lives to a timeline, organized by month and year.

<br/>


This is a [Fastfy](https://fastify.dev/docs/latest/Guides/Getting-Started/) project bootstrapped with `create-next-app`.

<h2>Getting Started</h2>

First, install dependencies

```bash
npm install
```
or

```bash
yarn
```
<br/>

> Rum the command: **`export (cat .env | xargs)`** in the terminal inside the project root. So you don't need to install `dotenv`
1. **env file**
    - create a file in the root of the project wich name: **.env**
    - Keys:

          DATABASE_URL="file:./dev.db"
          GITHUB_CLIENT_ID="github client id"
          GITHUB_CLIENT_SECRET="github client id"
          PORT_ENV="port to running service"


2. **run the development server:**

```bash
npm run dev
```
or

```bash
yarn dev
```



<br/>

1. **file env.local**
    - create a file in the root of the project wich name: <b>.env.local</b>
    - Keys:

             NEXT_PUBLIC_GITHUB_CLIENT_ID="github client id"

2. **You need the back end running or your machine**
    - Back end [Repository](https://github.com/ronald-assis/timeline_back)


<h2>Learn more</h2>
<h4>Porject resources:</h4>

- **<i>Frameworks:</i>**
1. [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
2. [Tailwindcss Documentation](https://v2.tailwindcss.com/docs) - learn about Tailwindcss features.

- **<i>Syntactic Superset</i>**

1. [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.

- **<i>Libraries</i>**
1. [axios](https://axios-http.com/docs/intro)
2. [dayjs](https://day.js.org/docs/en/installation/installation)
3. [eslint](https://eslint.org/docs/latest/)
4. [prettier](https://prettier.io/docs/en/options.html)
5. [js-cookie](https://www.npmjs.com/package/js-cookie)
6. [jwt-decode](https://jwt.io/introduction)
   <br/>