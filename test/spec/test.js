/*global describe, it */
'use strict';
(function () {
  var TweenLite = require('tweenLite');
  describe('TweenLite', function () {
    it('Setup properly', function () {
      expect(TweenLite).not.to.be.undefined;
      expect(TweenLite).to.have.property('to');
      expect(TweenLite).to.have.property('from');
      expect(TweenLite).to.be.a.function;
    });
    it('should Tween things', function(done) {
      var thing = {
        foo: 0
      };
      TweenLite.to(thing, 0.5, {foo: 10});
      setTimeout(function() {
        expect(thing.foo).to.equal(10);
        done();
      }, 520)
    });
  });
})();
