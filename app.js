var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',
  title: 'Apostrophe Boilerplate',

  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'site'
        }
      ]
    }
    // Add your modules and their respective configuration here!
  }

});
