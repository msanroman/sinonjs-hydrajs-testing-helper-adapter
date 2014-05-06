(function () {
  'use strict';
  var mockObjectMethods = function(oObj) {
    var mock = {},
      oWhatever;
    for(var sKey in oObj) {
      oWhatever = oObj[sKey];
      if (typeof oWhatever === 'function' && oWhatever.toString() !== 'stub') {
        mock[sKey] = sinon.stub();
      } else {
        mock[sKey] = oWhatever;
      }
    }
    return mock;
  };

  function adapter(Hydra, sinon) {
    Hydra.testing.setMockLibrary(sinon, {
      getAllFunctionsStubbed: function (oObj) {
        var oMock = {};
        if(oObj.toString() === 'stub') {
          return oObj;
        }
        if (typeof oObj === 'function') {
          if (oObj.prototype) {
            oMock = sinon.stub();
            oMock.prototype = mockObjectMethods(oObj.prototype);
          } else {
            return sinon.stub();
          }
          return oMock;
        }
        oMock = mockObjectMethods(oObj); 
        return oMock;
      }
    });
    return Hydra;
  }

  if (typeof define !== 'undefined') {
    define('sinonjs-hydrajs-testing-helper', ['hydrajs-testing-helper', 'sinon'], adapter);
  } else {
    adapter(Hydra, sinon);
  }
}());
