# MERN (Apollo GraphQL) Server Template

This is a template for a MERN (MongoDB, Express, React, Node) stack with Apollo GraphQL server.

## 🔧 Configurations

- `.gitignore` - Git ignore file that uses standard Node.js ignores. It also ignores `-lock.json` files, which you **might** need in **some** instances for deployment. Generally, they should be ignored 🙈 b/c they just clutter up your repo.
- `.gitattributes` - It ensures that `.js`/`.json` files are checked out with the correct line endings (Windows vs. Mac/Linux).
- `.eslintignore` - copy of ☝️ `.gitignore` file. This is used by ESLint to ignore files.
- `.prettierignore` - copy of ☝️ `.gitignore` file. This is used by Prettier to ignore files.
- ESLint (Standard) with Prettier
- `.vscode` - Automates linting and formatting with ESLint and Prettier. This happens whenever you leave your file and/or explicitly save it. CSS and JS validation are also disabled as we have ESLint; and, there should be no CSS written on server side here.

## Apollo GraphQL Server

- `@apollo/server graphql` - It's [v4](https://www.apollographql.com/docs/apollo-server/migration), the **generally available** version. It's not [v3](https://www.apollographql.com/docs/apollo-server/v3), the deprecated version.

## 🏗️ Directory Structure

It uses single files instead of directories as this is a small project. It's easier to navigate and find things. Code is already included where it's boilerplate. You can add more files as needed and edit away.

- `index.js` - The main file that starts the server. It calls on `server.js` to start Apollo Server and `db-client.js` to connect to MongoDB (with Mongoose). It keeps things decoupled.
- `server.js` - Apollo Server is started here. It uses `type-defs.js` and `resolvers.js` to create the schema and resolvers.
- `db-client.js` - Standard Mongoose connection.
- `graphql` - This is where all GraphQL related files are stored.
  - `type-defs.js` - This is where all GraphQL type definitions are stored.
  - `resolvers.js` - This is where all GraphQL resolvers are stored.
- `config.js` - It centralizes all environment variables in one place.
- `utils.js` - It centralizes all utility functions in one place. It already includes: `encodeToken` and `handleError`.

## MVC vs. Domain Modules

You are encouraged to [use **domain modules** instead of **MVC**](https://alexkondov.com/tao-of-node/#structure-in-modules).

## On Error Handling 🥅

[`utils.js`](./app/utils.js) `handleError`. You are encouraged to use `handleError` to handle errors from **resolvers** and **controllers**, etc.

This encourages consistency and makes it easier to debug by [centralizing error handling](https://alexkondov.com/tao-of-node/#centralize-error-handling). Again, we are decoupling things.

Furthermore, note that [Apollo Server v4 handles errors](https://www.apollographql.com/docs/apollo-server/data/errors/) differently from v3. It's a bit more complicated, but it's more flexible. It's also more consistent with GraphQL spec.

Crafting robust error handling can definitely be its own project role. Someone can start doing research into this sooner rather than later. That same person can keep notes on all of the errors you encounter and figure out which ones might be common ones that the `client` will likely encounter.

Use `try`-`catch` blocks as appropriate. You are not trying to catch all errors, but you are trying to catch the ones that are likely to occur. There will still be some things that are generally `INTERNAL_SERVER_ERROR`s, such as if your database is down. But, you can catch the ones that are likely to occur, such as if a user tries to access a resource that they don't have access to.

## 📝 Notes

### Schema Design

Your front-end developer and database admin should coordinate on what data you need and the frequency of both reading and writing said data. This will allow you to design your schemas most appropriately. Then, you can design your GraphQL schema accordingly.

Remember that MongoDB is more nuanced than traditional relational databases. Beware of schema design anti-patterns such as **unbounded arrays.**

The front-end developer and database admin should take time to review [this](https://www.youtube.com/watch?v=DUCvYbcgGsQ).

## Commits

To help ensure great commit messages for this project, consider using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). Here's [an extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to help you do that.

## Branching

`main` should only be for `Initial commit` and then not be used again until you are ready to deploy **something.** You should create a `dev` branch and use that for all development. Then, you can create feature branches off of `dev` and merge them back into `dev` when they are ready.

You could even do: `dev-server` and `dev-client` if you want to separate the two. From there, you might have: `dev-server-graphQL-type-defs` and `dev-server-graphQL-resolvers` and so on.

Delete branches after they are merged. You can always create a new branch if you need to. You should probably not have more than 3-4 branches at any 1️⃣ time. Use `git branch` to confirm.

### Protect ~~This 🏠~~ Your `main` Branch

Here's [a guide](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) to do that.

It should be protected from force pushes and deletions. It should also require at least one review before merging.

## Questions❔

Ask sooner rather than later!
