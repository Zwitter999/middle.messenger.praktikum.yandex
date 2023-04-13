const { JSDOM } = require('jsdom');
const fs = require('fs');

const { window } = new JSDOM(
  `<div id="root">
<header></header>
<main></main>
</div>`,
  {
    url: 'http://localhost:3000',
  },
);

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions['.scss'] = function () {
  module.exports = () => ({});
};
