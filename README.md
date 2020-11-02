# Apostrophe 3 demo and test project

## Get started

Install dependencies: `npm install`

### Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode."

To spin up the UI component library, run `npm run storybook`.

## Analyzing bundle size

It is possible to analyze the size of the admin UI webpack bundle:

```
APOS_BUNDLE_ANALYZER=1 node app @apostrophecms/asset:build
```

This will display a visualization in your browser.

As of this writing, we are not optimizing the webpack build for production, so expect to see big numbers.
