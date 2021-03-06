var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/resorts/burke-mountain');

/*global describe, it */
describe('parse burke-mountain', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/burke-mountain.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        "Mid Burke Express": "open",
        "Mountain Poma": "open",
        "Willoughby Quad": "closed",
        "Sherburne Express": "open",
        "J-Bar": "closed",
        "Magic Carpet": "closed"
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});