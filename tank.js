var system = require('system');
var links = [
  '/',
  '/products',
  '/products?mobile=1',
  '/products/myagkaya-mebel',
  '/products/myagkaya-mebel?mobile=1',
  '/photos',
  '/photos?mobile=1',
  '/products/27400',
  '/products/27400?mobile=1',
  '/posts',
  '/posts/11247-6-nestandartnyh-sistem-hraneniya-dlya-ochen-malenkoy-kvartiry',
  '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni',
  '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni?mobile=1',
  '/posts/11238-36-idealnyh-svetilnikov-dlya-malenkoy-kuhni.webview',
  '/posts/11096-novyy-sposob-oformleniya-derevyannogo-doma-kottedzh-v-nikolo-prozorovo',
  '/news',
  '/news/1924-shkola-milly-rezanovoy-zapuskaet-onlayn-kurs-interiernogo-risunka',
  '/discussions',
  '/discussions/dizayn-interjera/topics/1912-kak-vam-neoklassicheskiy-stil-v-interiere-spalni',
  '/profi',
  '/posts/12437-test-inmyroom-kakoy-ty-dachnik'
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
