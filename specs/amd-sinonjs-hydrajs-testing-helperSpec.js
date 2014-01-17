define(['sinonjs-hydrajs-testing-helper'], function (Hydra) {
  Hydra.testing.setTestFramework(true);
  Hydra.module.register('test', ['console'], function (cons) {
    return {
      init: function () {
        cons.log('test');
      }
    };
  });

  describe('SinonJS Hydra testing helper', function () {
    it('should check that you will get an object with all their methods being stubbed', function () {
      var oModule = Hydra.module.test('test');
      oModule.init();
      expect(oModule.mocks.console.log.callCount).toEqual(1);
    });
  });
});
