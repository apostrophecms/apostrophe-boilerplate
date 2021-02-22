const path = require('path');

// pm2-runtime is great at running node apps inside containers properly,
// but its arguments can be mistaken for a command line Apostrophe task
if (process.argv.find(arg => arg.match(/ProcessContainer/))) {
  process.argv = [ process.argv[0], 'app.js' ];
}

const apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    'apostrophe-images': {
      enableAltField: true
    },
  }
});
