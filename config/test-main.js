var tests = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}
requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src',

  paths: {
    'hydra': '../node_modules/hydra.js/src/Hydra',
    'hydrajs-testing-helper': '../node_modules/hydrajs-testing-helper/src/hydrajs-testing-helper',
    'sinon': '../node_modules/sinon/pkg/sinon-1.7.3'
  },
  shim : {
    sinon : { //This is important - otherwise the plugin won't find sinon!
      exports : "sinon"
    }
  },
  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});