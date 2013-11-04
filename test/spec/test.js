/*global describe, it */
'use strict';
(function () {
  var TweenLite = require('tweenLite').TweenLite;
  var Expo = require('tweenLite').Expo;
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
      }, 520);
    });
    it('should Tween things back', function(done) {
      var thang = {
        bar : 10
      };
      TweenLite.from(thang, 0.5, {bar : 100});
      expect(thang.bar).to.equal(100)
      setTimeout(function() {
        expect(thang.bar).to.equal(10);
        done();
      }, 520)
    })
  });
  describe('Expo', function() {
    it('Should have an easeOut function', function() {
      expect(Expo).to.have.property('easeOut');
    })
  });
})();
