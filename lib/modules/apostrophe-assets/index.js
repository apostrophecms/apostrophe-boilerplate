// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: 'site'
    }
  ],
  scripts: [
    {
      name: 'site'
    }
  ],
  construct(self, options) {
    self.on('apostrophe-pages:beforeSend', 'setIsDev', req => {
      req.data.isDev = !(process.env.NODE_ENV === 'production');
    });
  }
};
