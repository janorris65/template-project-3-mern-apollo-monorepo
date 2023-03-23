# MERN (Apollo GraphQL) Client Template

## 🔧 Configurations

- `.gitignore` - Git ignore file that uses standard Node.js ignores. It also ignores `-lock.json` files, which you **might** need in **some** instances for deployment. Generally, they should be ignored 🙈 b/c they just clutter up your repo.
- `.gitattributes` - It ensures that files are checked out with the correct line endings (Windows vs. Mac/Linux), especially our JS related files.
- `.eslintignore` - copy of ☝️ `.gitignore` file. This is used by ESLint to ignore files.
- `.prettierignore` - copy of ☝️ `.gitignore` file. This is used by Prettier to ignore files.
- ESLint (Standard) with Prettier
- `.vscode` - Automates linting and formatting with ESLint and Prettier. This happens whenever you leave your file and/or explicitly save it. CSS and JS validation are also disabled as we have ESLint; and, there should be no CSS written on server side here.

## Prop Types

> PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.

As TS is not an option for us, our linting will enforce the use of PropTypes. This is a good thing as it will help us catch bugs early on. It will also help us document our code. It's a gateway drug 💊 to TS.
