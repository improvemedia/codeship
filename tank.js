var system = require('system');
var links = [
  '/',
  '/products',
  '/products?mobile=1',
  '/photos',
  '/photos?mobile=1',
  '/products/27400',
  '/products/27400?mobile=1',
  '/posts/11247-6-nestandartnyh-sistem-hraneniya-dlya-ochen-malenkoy-kvartiry',
  '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni',
  '/posts/11096-novyy-sposob-oformleniya-derevyannogo-doma-kottedzh-v-nikolo-prozorovo',
];

var host = system.env.host || 'http://staging.inmyroom.ru';

casper.options.pageSettings.loadImages        = false;
casper.options.pageSettings.javascriptEnabled = false;
casper.options.pageSettings.loadPlugins       = false;
casper.options.waitTimeout = 10000;

casper.test.begin('links unauthorized', links.length, function(test) {
  casper.start();
  casper.setHttpAuth('imr', 'imr');

  links.forEach(function(link) {
    casper.thenOpen(host + link, function() {
      casper.test.assertHttpStatus(200, link);
    });
  });

  casper.run(function() {
    test.done();
  });
});
