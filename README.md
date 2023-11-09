<h1>💻 Project</h1>

A memory app where users can add texts, photos and videos of important events in their lives to a timeline, organized by month and year.


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
    - create a file in the root of the project with name: **.env**
    - Keys:

          DATABASE_URL="file:./dev.db"
          GITHUB_CLIENT_ID=github client id
          GITHUB_CLIENT_SECRET=github client id
          PORT_ENV=port to running service
          SECRET_JWT_ENV=jwt secret word

2. **run the development server:**

      ```bash
         npm run dev
      ```
      or
      
      ```bash
         yarn dev
      ```

3. **With running terminal execution commands:**
   
   - Run the commands when starting project and for each time schema file is changed.

            npm run migrate
   
4. **Route Documentations**
   
         ...

<h2>Learn more</h2>
<h4>Porject resources:</h4>

1. [Fastify Documentation](https://fastify.dev/docs/latest/Guides/Getting-Started/) - learn about Fastify.
2. [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma.
3. [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
4. [Axios](https://axios-http.com/docs/intro) - learn about Axios.
5. [Zod](https://zod.dev/) - learn about Zod.
