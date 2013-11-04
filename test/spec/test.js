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
  });
})();
