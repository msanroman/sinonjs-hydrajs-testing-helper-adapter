(function () {
  'use strict';
  function adapter( Hydra, sinon ) {
    Hydra.testing.setMockLibrary(sinon, {
      getAllFunctionsStubbed: function (oObj) {
        var sKey,
          oMock,
          oWhatever;
        if (typeof oObj === 'function') {
          return sinon.stub();
        }
        oMock = {};
        for (sKey in oObj) {
          oWhatever = oObj[sKey];
          if (typeof oWhatever === 'function') {
            oMock[sKey] = sinon.stub();
          } else {
            oMock[sKey] = oWhatever;
          }
        }
        return oMock;
      }
    });
    return Hydra;
  }

  if ( typeof define !== 'undefined' ) {
    define( 'sinonjs-hydrajs-testing-helper', ['hydrajs-testing-helper', 'sinon'], adapter );
  }else{
    adapter( Hydra, sinon );
  }
}());