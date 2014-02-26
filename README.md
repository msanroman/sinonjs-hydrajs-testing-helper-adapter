# sinonjs-hydrajs-testing-helper-adapter

SinonJS adapter to use it with hydrajs-testing-helper.
This adapter allows you mocking, automatically, all your dependencies making easier the testing of your code.

## Updated to version 1.1.1

[![Build Status](https://travis-ci.org/HydraJS/sinonjs-hydrajs-testing-helper-adapter.png)](https://travis-ci.org/HydraJS/sinonjs-hydrajs-testing-helper-adapter)

[Changelog](https://raw.github.com/HydraJS/sinonjs-hydrajs-testing-helper-adapter/master/changelog.txt)

## Install

Install with [Bower](http://bower.io)

bower install sinonjs-hydrajs-testing-helper

Install with [Component](http://component.io)

component install sinonjs-hydrajs-testing-helper

Install with [NPM](http://npmjs.org)

npm install sinonjs-hydrajs-testing-helper

### Use in browser

Insert in your html code:

<script type="text/javascript" src="hydra.js"></script
<script type="text/javascript" src="hydrajs-testing-helper.js"></script>
<script type="text/javascript" src="sinonjs-hydrajs-testing-helper-adapter"></script>

### Use with requirejs

Insert in your code:

define(['sinonjs-hydrajs-testing-helper-adapter'], function () {
// code here.
});

### Common usage

sinonjs-hydrajs-testing-helper-adapter sets SinonJS as your mock library and manages the mock of all your dependencies automatically.

# License
hydrajs-testing-helper is licensed under MIT license. (see LICENSE file)
