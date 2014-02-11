
/**
 * Dependencies.
 */

var readdir = require('fs').readdirSync;
var read = require('fs').readFileSync;
var assert = require('..');
var stylus = require('stylus');

/**
 * Run tests.
 */

readdir('test/cases').forEach(function(file) {
  if (~file.indexOf('.css')) return;
  describe(file, function() {
    it('should work', function(done) {
      var styl = read('test/cases/' + file, 'utf8');
      var css = read('test/cases/' + file.replace('.styl', '.css'), 'utf8');

      stylus(styl)
        .use(assert)
        .render(function(err, data){
          if(err) return done(err);
          data.trim().should.equal(css.trim());
          done();
        });

    });
  });
});
