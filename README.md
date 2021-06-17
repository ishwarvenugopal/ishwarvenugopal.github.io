# Project creation:

Create app directory:

`npx create-react-app <appname>`

Install Github pages dependency:

`npm install gh-pages --save-dev`

Add the following to package.json:

```
{
    ...
    "homepage": "http://ishwarvenugopal.github.io",
    ...
    "scripts": {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    },
    ...
}
```

Push changes to github repository.

### Deploy the code:

`npm run deploy`

### Alternate deployment method

Build the production code using: `npm run build`

Move contents from the 'build' folder to the 'docs' folder and push the changes to the repository.

Change the Github page source to the /docs folder in the main branch, from the repository settings