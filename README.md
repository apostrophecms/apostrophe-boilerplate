# Apostrophe 3 demo and test project

## Get started

1. Install dependencies: `npm install`
2. At the moment, you must have a local copy of `apostrophe` using the `3.0` branch and link that to this project. In whatever local directory you keep your dev work in, run:
   1. `git clone git@github.com:apostrophecms/apostrophe.git && cd apostrophe`
   2. `git fetch && git checkout 3.0` to get on the correct branch.
   3. `npm link` to set Apostrophe up for linking in the project.
3. Back in the `a3-demo` project, link up Apostrophe: `npm link apostrophe`.

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode."

To spin up the UI component library (including to work on Apostrophe UI components) run `npm run storybook`.

## Analyzing bundle size

It is possible to analyze the size of the admin UI webpack bundle:

```
APOS_BUNDLE_ANALYZER=1 node app @apostrophecms/asset:build
```

This will display a visualization in your browser.

As of this writing, we are not optimizing the webpack build for production, so expect to see big numbers.
