/*global describe, it */
'use strict';
(function () {
  var TweenLite = require('tweenLite');
  describe('TweenLite', function () {
    it('should run here few assertions', function () {
      expect(TweenLite).to.have.property('to');
      expect(TweenLite).to.have.property('from');
      expect(TweenLite).to.be.a.function;
    });
  });
})();
