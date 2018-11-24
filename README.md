# Exam Preperation Site

This page is build to provide all curriculum for the DAT159 subject at HVL.

This page is build with Gatsby 💜 (a React based static site generator) and is hosted on Github Pages.

## About the project

- Build with Gatsby.js
- Running with Node.js
- Hosted on Github Pages

## Requirements

- Node.js v8 or greater [https://nodejs.org/en/](https://nodejs.org/en/)
- Yarn [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/)
- Npm [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
- Gatsby-cli [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)

Install gatsby-cli by running:

```shell
npm install --global gatsby-cli
```

## How to run the project

Clone the project by running:

```shell
git clone https://github.com/181192/expr-site
```

Install all the dependencies:

```shell
cd expr-site
yarn install
```

Start the development and hot-reload server:

```shell
yarn dev
```

## How to contribute

Fork the project, then clone it

```shell
git clone https://github.com/<your-username>/expr-site
```

Install all the dependencies:

```shell
cd expr-site
yarn install
```

Do your changes and create a pull request.

**Remeber to refrence the issue number if there exist one in your commit message.**

```shell
git checkout -b name-of-the-branch
git add .
# Add the `#XX` so the commit linkes with the issue on github
git commit -m "I made some changes #12"
git push -u origin name-of-the-branch
```

Then go to your github page of the repository and create the pull request with some comments on what you have done.

If the issue should be closed link it to the issue by using one of the following keyword and the number of the issue in your commit message:

- `close #X`
- `closes #X`
- `closed #X`
- `fix #X`
- `fixes #X`
- `fixed #X`
- `resolve #X`
- `resolves #X`
- `resolved #X`

## Syncing the forked repo

You may want to keep the forked repository up to date with the original, then this guide is for you.
Especially if you are doing changes in the code base.

**If you are only changing or creating markdown files you can skip this.**

Configuring the upstream repository (my repository) to be able to fetch the
latest changes from the master branch.

```shell
git remote add upstream https://github.com/181192/expr-site
```

Verify the new upstream repository in your fork by running, then you should
see this repo as a upstream remote.

```shell
git remote -v
```

Fetch all the latest changes from the master branch of this repo.

```shell
git fetch upstream
```

Make sure that you are on your master branch

```shell
git chechout master
```

Rewrite your master branch so that any commits of yours that aren't already in
upstream/master are replayed on top of my master branch:

```shell
git rebase upstream/master
```

You may need to force push to your own forked repo if there was a lot of changes.

```shell
git push -f origin master
```

## Lighthouse audits

![Audits](https://raw.githubusercontent.com/181192/expr-site/master/audits.png)
