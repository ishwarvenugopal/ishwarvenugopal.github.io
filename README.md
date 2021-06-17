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

Deploy the code:

`npm run deploy`

Change the Github page source to the gh-pages branch from the repository settings