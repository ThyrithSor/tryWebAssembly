const fetch = require('node-fetch')

let checkPair

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) });
};

loadWebAssembly('wasm/checkPair.wasm')
  .then(instance => {
    checkPair = instance.exports._Z7checkPairi;
    console.log('Finished compiling! Ready when you are...');
  });