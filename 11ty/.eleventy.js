const fs = require('fs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy("img");

  // Make 404 page work with `eleventy --serve`
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404/index.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    passthroughFileCopy: true,
  };
};
